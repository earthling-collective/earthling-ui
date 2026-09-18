"use client";

import type { ComponentProps } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "earthling-ui/alert-dialog";
import { Button } from "earthling-ui/button";

type AlertDialogExampleProps = ComponentProps<typeof AlertDialog>;

export default function Example(props: AlertDialogExampleProps) {
  return (
    <AlertDialog {...props}>
      <AlertDialogTrigger asChild>
        <Button material="outline">Revoke API key</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Revoke this API key?</AlertDialogTitle>
          <AlertDialogDescription>
            Requests using “Production sync” will stop immediately. This cannot
            be undone, but you can create a new key later.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Keep key</AlertDialogCancel>
          <AlertDialogAction>Revoke key</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
