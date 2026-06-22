import { cn as cnFast, type ClassValue } from "cnfast";

export function cn(...inputs: ClassValue[]) {
  return cnFast(...inputs);
}
