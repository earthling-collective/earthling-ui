import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("alert-dialog");

export default async function () {
  return (
    <ComponentSublayout
      path="alert-dialog"
      anatomy={
        "<AlertDialog>\n  <AlertDialogTrigger>Revoke API key</AlertDialogTrigger>\n  <AlertDialogContent>\n    <AlertDialogHeader>\n      <AlertDialogTitle>Revoke this API key?</AlertDialogTitle>\n      <AlertDialogDescription>\n        Requests using this key will stop immediately.\n      </AlertDialogDescription>\n    </AlertDialogHeader>\n    <AlertDialogFooter>\n      <AlertDialogCancel>Keep key</AlertDialogCancel>\n      <AlertDialogAction>Revoke key</AlertDialogAction>\n    </AlertDialogFooter>\n  </AlertDialogContent>\n</AlertDialog>"
      }
      example={<Example />}
    />
  );
}
