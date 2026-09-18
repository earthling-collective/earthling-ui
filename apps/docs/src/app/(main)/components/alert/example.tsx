"use client";

import type { ComponentProps } from "react";
import { Alert, AlertDescription, AlertTitle } from "earthling-ui/alert";

type AlertExampleProps = ComponentProps<typeof Alert>;

export default function Example(props: AlertExampleProps) {
  return (
    <Alert {...props}>
      <AlertTitle>Deployment ready</AlertTitle>
      <AlertDescription>
        Your changes passed every check and can be published when you are ready.
      </AlertDescription>
    </Alert>
  );
}
