"use client";

import { Box, Input } from "@earthling-ui/primitives";
import { useForm } from "@earthling-ui/forms";

export default function App() {
  const { submit, useFormField } = useForm<{ name: string; password: string }>({
    defaultValues: {},
    onSubmit: async (data) => {
      console.log(data);
    },
  });

  const [name, setName] = useFormField("name");
  const [password, setPassword] = useFormField("password");

  return (
    <Box className="space-x-4">
      <form action={submit}>
        <Input
          _Control={{ value: name, onChange: (e) => setName(e.target.value) }}
        />
        <Input
          _Control={{
            value: password,
            onChange: (e) => setPassword(e.target.value),
            type: "password",
          }}
        />
        <button type="submit">Click</button>
      </form>
    </Box>
  );
}
