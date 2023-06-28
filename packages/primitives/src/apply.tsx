export type Applicable<
  P extends {},
  T extends { [key in keyof unknown]: unknown }
> = P & {
  apply?: (props: P, tags: T) => Partial<P>;
};
