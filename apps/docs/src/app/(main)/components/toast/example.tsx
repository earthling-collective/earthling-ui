"use client";

import { useState, type ComponentProps } from "react";
import { Button } from "earthling-ui/button";
import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "earthling-ui/toast";

type ToastExampleProps = Pick<
  ComponentProps<typeof Toast>,
  "duration" | "scheme"
>;

export default function Example({
  duration = 5000,
  scheme,
}: ToastExampleProps) {
  const [open, setOpen] = useState(false);

  function showToast() {
    setOpen(false);
    window.setTimeout(() => setOpen(true), 0);
  }

  return (
    <ToastProvider>
      <Button onClick={showToast}>Save changes</Button>
      <Toast
        duration={duration}
        onOpenChange={setOpen}
        open={open}
        scheme={scheme}
      >
        <div className="grid gap-1">
          <ToastTitle>Changes saved</ToastTitle>
          <ToastDescription>
            Your workspace preferences are up to date.
          </ToastDescription>
        </div>
        <ToastAction altText="Undo saved changes">Undo</ToastAction>
        <ToastClose />
      </Toast>
      <ToastViewport />
    </ToastProvider>
  );
}
