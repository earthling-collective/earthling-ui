declare type SX =
  | (import("csstype").Properties & { [key: string]: string | number | SX })
  | SX[];
