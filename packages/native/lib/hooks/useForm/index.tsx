import { Dispatch, SetStateAction, useCallback, useState } from "react";
import { InputProps } from "../../components/Input";
import { ValidationsProps } from "../../components/Validations";

export * from "./validations";

const DEFAULT_KEY = "submit";

type FormFieldOptions = (
  | {
      type: "text";
      default?: string;
      validate?: (value: string) => void;
    }
  | {
      type: "email";
      default?: string;
      validate?: (value: string) => void;
    }
  | {
      type: "password";
      default?: string;
      validate?: (value: string) => void;
    }
) & {
  validationMode?: "onSubmit" | "onBlur";
};
export type FormFieldOptionMap<T> = {
  [key in Partial<keyof T>]: FormFieldOptions;
};

type ErrorMap<T> = { [key in keyof T]: Error[] } & { [DEFAULT_KEY]: Error[] };

function parseZodErrors(error: Error) {
  try {
    return (JSON.parse(error.message) as any[])?.map(
      (x) => new Error(x.message)
    );
  } catch (err) {
    return [error];
  }
}

type UseFormOptions<T> = {
  onSubmit?: (data: {
    [key in keyof T]: FormFieldOptionMap<T>[key]["default"];
  }) => Promise<void> | void;
  handleSubmissionError?: (
    error: Error | Error[],
    setErrors: Dispatch<SetStateAction<ErrorMap<T>>>
  ) => Promise<void> | void;
};

type UseFormReturn<T> = {
  state: {
    [key in keyof T]: FormFieldOptionMap<T>[key]["default"];
  };
  errors?: Partial<ErrorMap<T>>;
  clearErrors?: (key: keyof T | typeof DEFAULT_KEY) => void;
  clearAllErrors?: () => void;
  get: (key: keyof T) => FormFieldOptionMap<T>[typeof key]["default"];
  submit: () => Promise<void>;
  validate: (
    fields?: (keyof T)[]
  ) => Promise<
    { result: "failure"; errors: Partial<ErrorMap<T>> } | { result: "success" }
  >;
  reset: () => void;
  inputProps: (key: keyof T) => {
    _Validations?: Pick<ValidationsProps, "errors" | "onErrorClose">;
    _Input?: Partial<InputProps["_Input"]>;
  };
};

export function useForm<T extends object>(
  fields: FormFieldOptionMap<T>,
  options?: UseFormOptions<T>
): UseFormReturn<T> {
  const { onSubmit, handleSubmissionError } = options || {};

  const defaults = {
    ...Object.fromEntries(
      Object.entries(fields).map(([key, options]) => [
        key,
        (options as any)?.default,
      ])
    ),
  } as {
    [key in keyof T]: (typeof fields)[key]["default"];
  };

  const [state, setState] = useState(defaults);
  const [errors, setErrors] = useState<Partial<ErrorMap<T>>>({});

  const validate: UseFormReturn<T>["validate"] = useCallback(
    async (fieldKeys?: (keyof typeof fields)[]) => {
      //determine fields to update
      const fieldsToValidate = Object.fromEntries(
        Object.entries<FormFieldOptions>(fields).filter(
          (x) => !fieldKeys || fieldKeys.includes(x[0] as keyof T)
        )
      );

      //test validations
      const cleared: (keyof T)[] = [];
      const errs: Partial<ErrorMap<T>> = {};
      for (let k in fieldsToValidate) {
        const key = k as keyof FormFieldOptionMap<T>;
        try {
          fields[key].validate?.(state[key]!);
          cleared.push(key);
        } catch (err: any) {
          const e = parseZodErrors(err);
          errs[key] = e;
        }
      }

      //update errors
      setErrors(({ ...x }) => {
        for (let key of cleared) delete x[key];
        for (let key of Object.keys(errs) as (keyof T)[]) x[key] = errs[key];
        return x;
      });

      //return status obj
      return Object.keys(errs).length
        ? {
            result: "failure",
            errors: errs,
          }
        : {
            result: "success",
          };
    },
    [fields, errors]
  );

  return {
    state,
    errors,
    clearErrors: (key) => {
      setErrors(({ ...x }) => {
        delete x[key];
        return x;
      });
    },
    clearAllErrors: () => {
      setErrors({});
    },
    get: (key) => state[key] as (typeof fields)[typeof key]["default"],
    submit: async () => {
      //validate
      if ((await validate()).result === "failure") return;

      try {
        return await onSubmit?.(state);
      } catch (err: any) {
        if (handleSubmissionError) handleSubmissionError(err, setErrors);
        else
          setErrors((x) => ({
            ...x,
            [DEFAULT_KEY]: Array.isArray(err) ? err : [err],
          }));
      }
    },
    reset: () => {
      setState(defaults);
    },
    validate,
    inputProps: (key: keyof T) => ({
      type: fields[key].type,
      ...(errors[key]?.length
        ? {
            _Validations: {
              errors: errors[key],
              onErrorClose: (i) => {
                setErrors((x) => ({
                  ...x,
                  [key]: [...x[key]].filter((x, j) => i !== j),
                }));
              },
            },
          }
        : {}),
      _Input: {
        type: fields[key].type,
        value: state[key] as string,
        onChangeText: (value) => setState((x) => ({ ...x, [key]: value })),
        ...(fields[key].validationMode === "onBlur"
          ? {
              onBlur: async () => {
                await validate([key]);
              },
            }
          : {}),
        ...(fields[key].type === "email"
          ? { keyboardType: "email-address", autoCapitalize: "none" }
          : {}),
        ...(fields[key].type === "password" ? { secureTextEntry: true } : {}),
      },
    }),
  };
}
