import { Alert, AlertTitle, AlertDescription } from "earthling-ui/alert";

export default function (props: Record<string, any>) {
  return (
    <Alert {...props}>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}
