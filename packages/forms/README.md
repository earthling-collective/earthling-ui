# @earthling-ui/forms

**@earthling-ui/forms** is a lightweight package for managing form state and validation in React applications. It provides a simple and flexible way to manage form data and interact with form fields, enabling you to build responsive and dynamic forms effortlessly. This package is built on top of [Zustand](https://github.com/pmndrs/zustand), a state management library for React.

## Installation

You can easily install this package from NPM using npm or yarn:

```bash
npm install @earthling-ui/forms
# or
yarn add @earthling-ui/forms
# or
pnpm install @earthling-ui/forms
# or
bun install @earthling-ui/forms
```

## Usage

Here is a brief overview of how to use this package:

1. **Import the necessary functions**:

```javascript
import { useForm } from "@earthling-ui/forms";
```

2. **Create a form store** using the `useForm` hook:

```javascript
const form = useForm({
  defaultValues: {
    // Define your form fields and their initial values here
    field1: "initialValue1",
    field2: "initialValue2",
  },
  onSubmit: async (data) => {
    // Handle form submission, e.g., send data to a server
  },
  onError: (error) => {
    // Handle form submission errors
  },
});
```

3. **Access form data and methods**:

You can access various properties and methods provided by the form:

- `form.data`: This is the form state object.

- `form.submit()`: Trigger the form submission. It will call the `onSubmit` function provided during initialization.

- `form.reset()`: Reset the form to its initial values.

- `form.useFormField(key)`: Create a custom hook to access, set, and validate a specific form field.

Example:

```javascript
const [fieldValue, setFieldValue, fieldErrors] = form.useFormField("field1");
```

4. **Use the form state and methods**:

You can now use the form state and methods in your React components to build your form UI.

```javascript
<form action={form.submit}>
  <input
    type="text"
    value={fieldValue}
    onChange={(e) => setFieldValue(e.target.value)}
  />
  {fieldErrors && <div>{fieldErrors.message}</div>}
  <button type="submit">Submit</button>
</form>
```

## Example

Here's a simple example of a login form using **@earthling-ui/forms**:

```javascript
import React from "react";
import { useForm } from "@earthling-ui/forms";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    onSubmit: async (data) => {
      // Submit the form data to your server
    },
  });

  const [email, setEmail, emailErrors] = form.useFormField("email");
  const [password, setPassword, passwordErrors] = form.useFormField("password");

  return (
    <form action={form.submit}>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailErrors && <div>{emailErrors.message}</div>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {passwordErrors && <div>{passwordErrors.message}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
```

## License

This package is open-source and distributed under the MIT License. Feel free to use and modify it according to your needs.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please [report them on GitHub](https://github.com/sFrady20/earthling-ui/issues).

If you'd like to contribute to the development of this package, feel free to submit pull requests.

## Credits

This package is developed by [Steven Frady](https://www.stevenfrady.com/).

Enjoy using **@earthling-ui/forms** to simplify form management in your React applications! If you find it helpful, please consider giving it a star on GitHub and sharing it with others.
