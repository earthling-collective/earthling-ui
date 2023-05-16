import React from "react";
import { TextInput } from "react-native";

// Retrieves user input from text input, comments show desired validation

export const Username: React.FC<{
  usernameIsValid: boolean;
  setUsername: (_: string) => void;
}> = ({ usernameIsValid, setUsername }) => {
  return (
    <TextInput
      autoCapitalize="none"
      placeholder="Username"
      className="h-12 w-80 py-2 text-base border-b-2
      border-[#D6F2FF] focus:outline-none focus:border-slate-300"
      onChangeText={(text) => setUsername(text)}
    />
  );
};

export const Email: React.FC<{
  emailIsValid: boolean;
  setEmail: (_: string) => void;
}> = ({ emailIsValid, setEmail }) => {
  return (
    <TextInput
      placeholder="Email"
      autoCapitalize="none"
      className="h-12 w-80 py-2 text-base border-b-2
      border-[#D6F2FF] focus:outline-none focus:border-slate-300"
      onChangeText={(text) => setEmail(text)}
    />
  );
};

// Top part is to allow values to be passed through component in SignInScreen
export const Password: React.FC<{
  passwordIsValid: boolean;
  setPassword: (_: string) => void;
}> = ({ passwordIsValid, setPassword }) => {
  return (
    <TextInput
      placeholder="Password"
      autoCapitalize="none"
      className="h-12 w-80 py-2 text-base border-b-2
      border-[#D6F2FF] focus:outline-none focus:border-slate-300"
      secureTextEntry={true}
      onChangeText={(text) => setPassword(text)}
    />
  );
};

export const PhoneNum: React.FunctionComponent<{
  phoneNumIsValid: boolean;
  setPhoneNum: (_: string) => void;
}> = ({ phoneNumIsValid, setPhoneNum }) => {
  return (
    <TextInput
      placeholder="Phone Number"
      autoCapitalize="none"
      className="h-12 w-80 py-2 text-base border-b-2
      border-[#D6F2FF] focus:outline-none focus:border-slate-300"
      // Need to add validation
      onChangeText={(text) => setPhoneNum(text)}
    />
  );
};

export const Code: React.FunctionComponent<{
  codeIsValid: boolean;
  setCode: (_: string) => void;
}> = ({ codeIsValid, setCode }) => {
  return (
    <TextInput
      placeholder="6 Digit Code"
      autoCapitalize="none"
      className="h-12 w-80 py-2 text-base border-b-2
      border-[#D6F2FF] focus:outline-none focus:border-slate-300"
      onChangeText={(text) => setCode(text)}
    />
  );
};
