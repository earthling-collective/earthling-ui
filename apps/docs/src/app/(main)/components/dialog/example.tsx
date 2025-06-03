import { Button } from "earthling-ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DialogExitButton,
  DialogForm,
} from "earthling-ui/dialog";

export default function (props: Record<string, any>) {
  return (
    <Dialog {...props}>
      <DialogTrigger asChild>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent asChild>
        <DialogForm
          action={async () => {
            console.log("Submitted");
          }}
        >
          <DialogExitButton />
          <DialogHeader>
            <DialogTitle>Dialog Title</DialogTitle>
            <DialogDescription>Dialog Description</DialogDescription>
          </DialogHeader>
          Dialog Content
          <DialogFooter>
            <DialogClose asChild>
              <Button scheme="secondary">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogForm>
      </DialogContent>
    </Dialog>
  );
}
