"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";
import {
  createContext,
  forwardRef,
  useContext,
  useState,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { on } from "events";
import { Slot } from "@radix-ui/react-slot";

type DialogContextValue = {
  isOpen: boolean;
  close: () => void;
};
const DialogContext = createContext<DialogContextValue>({
  isOpen: false,
  close: () => {},
});
const useDialog = () => useContext(DialogContext);

const Dialog = ({
  open: openProp,
  defaultOpen,
  onOpenChange,
  ...rest
}: ComponentProps<typeof DialogPrimitive.Root>) => {
  const [openState, setOpenState] = useState(defaultOpen || false);
  const isOpen = openProp === undefined ? openState : openProp;
  return (
    <DialogContext.Provider
      value={{
        isOpen,
        close: () => {
          setOpenState(false);
          onOpenChange?.(false);
        },
      }}
    >
      <DialogPrimitive.Root
        {...rest}
        open={isOpen}
        onOpenChange={(isOpen) => {
          setOpenState(isOpen);
          onOpenChange?.(isOpen);
        }}
      />
    </DialogContext.Provider>
  );
};

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = forwardRef<
  ComponentRef<typeof DialogPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = forwardRef<
  ComponentRef<typeof DialogPrimitive.Content>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogExitButton = forwardRef<
  ComponentRef<typeof DialogPrimitive.Close>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Close>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Close
    ref={ref}
    className={cn(
      "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground cursor-pointer",
      className
    )}
    {...props}
  >
    <i className="icon-[lucide--x] block" />
    <span className="sr-only">Close</span>
  </DialogPrimitive.Close>
));
DialogExitButton.displayName = "DialogExitButton";

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle = forwardRef<
  ComponentRef<typeof DialogPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = forwardRef<
  ComponentRef<typeof DialogPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

const DialogForm = forwardRef<
  ComponentRef<"form">,
  ComponentProps<"form"> & { asChild?: boolean }
>(({ action, asChild, ...props }, ref) => {
  const dialog = useDialog();
  const Comp = asChild ? Slot : "form";
  return (
    <Comp
      ref={ref}
      {...props}
      action={
        typeof action === "function"
          ? async (formData) => {
              await action(formData);
              dialog.close();
            }
          : action
      }
    />
  );
});
DialogForm.displayName = "DialogForm";

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogExitButton,
  DialogFooter,
  DialogForm,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  useDialog,
};
