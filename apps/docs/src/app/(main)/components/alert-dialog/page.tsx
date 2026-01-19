import { ComponentSublayout } from "../sublayout";

export default async function () {
  return (
    <ComponentSublayout
      path="alert-dialog"
      anatomy={`<AlertDialog>
  <AlertDialogTrigger />
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle />
      <AlertDialogDescription />
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel />
      <AlertDialogAction />
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
    />
  );
}
