"use client";

import { useState } from "react";
import {
  Toast,
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "earthling-ui/toast";
import { Button } from "earthling-ui/button";

export default function (props: Record<string, any>) {
  const [open, setOpen] = useState(false);

  return (
    <ToastProvider>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        Show Toast
      </Button>
      <Toast open={open} onOpenChange={setOpen} {...props}>
        <div className="grid gap-1">
          <ToastTitle>Scheduled: Catch up</ToastTitle>
          <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
        </div>
        <ToastAction altText="Undo">Undo</ToastAction>
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
