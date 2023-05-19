import { Dispatch, SetStateAction, useState } from "react";
import { InputProps } from "../../components/Input";
import { ValidationsProps } from "../../components/Validations";

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

export function useForm<T extends object>(
  fields: FormFieldOptionMap<T>,
  options?: {
    onSubmit?: (data: {
      [key in keyof T]: (typeof fields)[key]["default"];
    }) => Promise<void> | void;
    handleSubmissionError?: (
      error: Error | Error[],
      setErrors: Dispatch<SetStateAction<ErrorMap<T>>>
    ) => Promise<void> | void;
  }
): {
  state: {
    [key in keyof T]: (typeof fields)[key]["default"];
  };
  errors?: Partial<ErrorMap<T>>;
  clearErrors?: (key: keyof T | typeof DEFAULT_KEY) => void;
  clearAllErrors?: () => void;
  get: (key: keyof T) => (typeof fields)[typeof key]["default"];
  submit: () => Promise<void>;
  reset: () => void;
  inputProps: (key: keyof T) => {
    _Validations?: Pick<ValidationsProps, "errors" | "onErrorClose">;
    _Input?: Pick<
      InputProps["_Input"],
      | "onChangeText"
      | "value"
      | "onBlur"
      | "secureTextEntry"
      | "keyboardType"
      | "autoCapitalize"
    >;
  };
} {
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
      try {
        let errs: typeof errors = {};
        for (let [key, options] of Object.entries<FormFieldOptions>(fields)) {
          try {
            fields[key].validate?.(state[key]);
            delete errors[key];
          } catch (err) {
            errs[key] = parseZodErrors(err);
          }
        }
        if (Object.keys(errs).length) {
          setErrors(errs);
          return;
        }

        return await onSubmit?.(state);
      } catch (err) {
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
    inputProps: (key) => ({
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
              onBlur: () => {
                try {
                  fields[key].validate(state[key]);
                  setErrors(({ ...x }) => {
                    delete x[key];
                    return x;
                  });
                } catch (err) {
                  setErrors((x) => ({ ...x, [key]: parseZodErrors(err) }));
                }
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
