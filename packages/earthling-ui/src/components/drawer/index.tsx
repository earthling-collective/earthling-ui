"use client";

import {
  createContext,
  forwardRef,
  useContext,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentRef,
} from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const DrawerContext = createContext<{
  position: "left" | "right" | "top" | "bottom";
}>({
  position: "bottom",
});

export type DrawerProps = ComponentProps<typeof DrawerPrimitive.Root> & {
  position?: "left" | "right" | "top" | "bottom";
};

const Drawer = ({ position, children, ...props }: DrawerProps) => (
  <DrawerPrimitive.Root direction={position} {...props}>
    <DrawerContext.Provider value={{ position: position || "bottom" }}>
      {children}
    </DrawerContext.Provider>
  </DrawerPrimitive.Root>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;

const DrawerPortal = DrawerPrimitive.Portal;

const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = forwardRef<
  ComponentRef<typeof DrawerPrimitive.Overlay>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-muted/60", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva("fixed z-50 flex h-auto bg-background", {
  variants: {
    position: {
      bottom: "inset-x-0 bottom-0 rounded-t-lg border-t flex-col",
      top: "inset-x-0 top-0 rounded-b-lg border-b flex-col-reverse",
      left: "inset-y-0 left-0 rounded-r-lg border-r flex-row-reverse",
      right: "inset-y-0 right-0 rounded-l-lg border-l flex-row",
    },
  },
  defaultVariants: {
    position: "bottom",
  },
});

const drawerHandleVariants = cva("rounded-full bg-muted", {
  variants: {
    position: {
      bottom: "h-2 w-[100px] mx-auto mt-4",
      top: "h-2 w-[100px] mx-auto mb-4",
      left: "w-2 h-[100px] my-auto mr-4",
      right: "w-2 h-[100px] my-auto ml-4",
    },
  },
  defaultVariants: {
    position: "bottom",
  },
});

export interface DrawerContentProps
  extends ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

const DrawerContent = forwardRef<
  ComponentRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, ...props }, ref) => {
  const context = useContext(DrawerContext);

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          drawerContentVariants({
            position: props.position || context.position,
          }),
          className
        )}
        {...props}
      >
        <div
          className={cn(
            drawerHandleVariants({
              position: props.position || context.position,
            })
          )}
        />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = forwardRef<
  ComponentRef<typeof DrawerPrimitive.Title>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = forwardRef<
  ComponentRef<typeof DrawerPrimitive.Description>,
  ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
