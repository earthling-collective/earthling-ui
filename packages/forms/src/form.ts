import { useCallback, useMemo } from "react";
import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";

type FormData = {
  [key: string]: unknown;
};
type FormState<T extends FormData> = {
  [key: string]:
    | {
        value: T[typeof key];
        errors?: Error;
      }
    | undefined;
};

function makeStore<D extends FormData>(
  initializer: StateCreator<FormState<D>, [["zustand/immer", never]], []>
) {
  return create(immer<FormState<D>>(initializer));
}

export function useForm<
  D extends FormData,
  S extends FormState<D> = FormState<D>,
>(options?: {
  defaultValues?: Partial<D>;
  onSubmit?: (data: D) => Promise<void>;
  onError?: (error: Error) => void;
}) {
  const { onSubmit, onError, defaultValues = {} } = options || {};
  const data = useMemo(
    () =>
      makeStore(() =>
        Object.fromEntries(
          Object.entries(defaultValues).map(([k, v]) => [k, { value: v }])
        )
      ),
    []
  );

  const getMappedDataObject = useCallback(
    () =>
      Object.fromEntries(
        Object.entries(data.getState()).map(([key, field]) => [
          key,
          field?.value,
        ])
      ) as D,
    [data]
  );

  const submit = useCallback(async () => {
    try {
      return await onSubmit?.(getMappedDataObject());
    } catch (error: any) {
      onError?.(error);
    }
  }, [data]);

  const reset = useCallback(() => {
    data.setState(
      Object.fromEntries(
        Object.entries(defaultValues).map(([k, v]) => [k, { value: v }])
      ),
      true
    );
  }, [defaultValues]);

  const useFormField = useCallback(function <K extends keyof D & keyof S>(
    key: K
  ) {
    const value = data((x) => (x as S)[key]?.value) as D[K];
    const errors = data((x) => (x as S)[key]?.errors);
    return useMemo(
      () =>
        [
          value,
          (value: D[K]) => {
            data.setState((x) => {
              if (!(x as S)[key]) (x as any)[key] = { value: undefined };
              (x as any)[key].value = value;
            });
          },
          errors,
        ] as const,
      [data, value, errors]
    );
  }, []);

  const value = useMemo(
    () => ({
      data,
      submit,
      reset,
      useFormField,
    }),
    [data, submit]
  );

  return value;
}
