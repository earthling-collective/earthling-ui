import { z } from "zod";

export const emailValidation = z.string().email();
export const passwordValidation = z.string().min(4);
export const firstNameValidation = z.string().min(2).max(32);
export const lastNameValidation = z.string().min(2).max(32);
