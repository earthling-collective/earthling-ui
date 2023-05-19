import { useState, useEffect } from "react";
import zod from "zod";

export const useValidEmail = (initialValue: string) => {
  const [email, setEmail] = useState(initialValue);
  const [emailIsValid, setEmailIsValid] = useState(true);

  useEffect(() => {
    const emailSchema = zod.object({
      email: zod.string().email(),
    });

    if (email.length === 0) {
      setEmailIsValid(true);
      return;
    }

    const isValid = emailSchema.safeParse({ email }).success;

    setEmailIsValid(isValid);
  }, [email]);

  // console.log(email);

  return { email, setEmail, emailIsValid };
};

export const useValidPassword = (initialValue: string) => {
  const [password, setPassword] = useState(initialValue);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  useEffect(() => {
    const passwordSchema = zod.object({
      password: zod.string().min(8),
    });

    if (password.length === 0) {
      setPasswordIsValid(true);
      return;
    }

    const isValid = passwordSchema.safeParse({ password }).success;

    setPasswordIsValid(isValid);
  }, [password]);

  // console.log(password);

  return { password, setPassword, passwordIsValid };
};

export const useValidUsername = (initialValue: string) => {
  const [username, setUsername] = useState(initialValue);
  const [usernameIsValid, setUsernameIsValid] = useState(true);

  useEffect(() => {
    const usernameSchema = zod.object({
      username: zod.string().min(8),
    });

    if (username.length === 0) {
      setUsernameIsValid(true);
      return;
    }

    const isValid = usernameSchema.safeParse({ username }).success;

    setUsernameIsValid(isValid);
  }, [username]);

  // console.log(username);

  return { username, setUsername, usernameIsValid };
};

export const useValidCode = (initialValue: string) => {
  const [code, setCode] = useState(initialValue);
  const [codeIsValid, setCodeIsValid] = useState(true);

  useEffect(() => {
    const codeSchema = zod.object({
      code: zod.string().min(6),
    });

    if (code.length === 0) {
      setCodeIsValid(true);
      return;
    }

    const isValid = codeSchema.safeParse({ code }).success;

    setCodeIsValid(isValid);
  }, [code]);

  return { code, setCode, codeIsValid };
};

export const useValidPhoneNum = (initialValue: string) => {
  const [phoneNum, setPhoneNum] = useState(initialValue);
  const [phoneNumIsValid, setPhoneNumIsValid] = useState(true);

  useEffect(() => {
    const phoneNumSchema = zod.object({
      phoneNum: zod.string().min(10),
    });

    if (phoneNum.length === 0) {
      setPhoneNumIsValid(true);
      return;
    }

    const isValid = phoneNumSchema.safeParse({ phoneNum }).success;

    setPhoneNumIsValid(isValid);
  }, [phoneNum]);

  return { phoneNum, setPhoneNum, phoneNumIsValid };
};
