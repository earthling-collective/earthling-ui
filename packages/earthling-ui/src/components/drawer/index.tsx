"use client";

import {
  createContext,
  forwardRef,
  useContext,
  type ComponentProps,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
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

const Drawer = ({
  position = "bottom",
  direction = position,
  children,
  ...props
}: DrawerProps) => (
  <DrawerPrimitive.Root direction={direction} {...props}>
    <DrawerContext.Provider value={{ position: direction }}>
      {children}
    </DrawerContext.Provider>
  </DrawerPrimitive.Root>
);
Drawer.displayName = "Drawer";

type DrawerTriggerPrimitive = typeof DrawerPrimitive.Trigger;
export type DrawerTriggerProps = ComponentProps<DrawerTriggerPrimitive>;
const DrawerTrigger = DrawerPrimitive.Trigger as React.FC<DrawerTriggerProps>;

export type DrawerPortalProps = ComponentProps<typeof DrawerPrimitive.Portal>;
const DrawerPortal = DrawerPrimitive.Portal as React.FC<DrawerPortalProps>;

export type DrawerCloseProps = ComponentProps<typeof DrawerPrimitive.Close>;
const DrawerClose = DrawerPrimitive.Close as React.FC<DrawerCloseProps>;

type DrawerOverlayPrimitive = typeof DrawerPrimitive.Overlay;
export type DrawerOverlayProps =
  ComponentPropsWithoutRef<DrawerOverlayPrimitive>;
const DrawerOverlay: ForwardRefExoticComponent<
  DrawerOverlayProps & RefAttributes<ComponentRef<DrawerOverlayPrimitive>>
> = forwardRef<ComponentRef<DrawerOverlayPrimitive>, DrawerOverlayProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Overlay
      ref={ref}
      className={cn(
        "fixed inset-0 z-50 bg-muted/60 duration-150 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 motion-reduce:animate-none",
        className,
      )}
      {...props}
    />
  ),
);
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva(
  "fixed z-50 flex h-auto overflow-auto bg-background outline-none motion-reduce:transition-none",
  {
    variants: {
      position: {
        bottom:
          "inset-x-0 bottom-0 max-h-[calc(100dvh-1rem)] flex-col rounded-t-xl border-t",
        top: "inset-x-0 top-0 max-h-[calc(100dvh-1rem)] flex-col-reverse rounded-b-xl border-b",
        left: "inset-y-0 left-0 max-w-[calc(100vw-1rem)] flex-row-reverse rounded-r-xl border-r",
        right:
          "inset-y-0 right-0 max-w-[calc(100vw-1rem)] flex-row rounded-l-xl border-l",
      },
    },
    defaultVariants: {
      position: "bottom",
    },
  },
);

const drawerHandleVariants = cva("rounded-full bg-muted", {
  variants: {
    position: {
      bottom: "mx-auto mt-4 h-1.5 w-24",
      top: "mx-auto mb-4 h-1.5 w-24",
      left: "my-auto me-4 h-24 w-1.5",
      right: "my-auto ms-4 h-24 w-1.5",
    },
  },
  defaultVariants: {
    position: "bottom",
  },
});

export interface DrawerContentProps
  extends
    ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>,
    VariantProps<typeof drawerContentVariants> {}

const DrawerContent = forwardRef<
  ComponentRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, position, ...props }, ref) => {
  const context = useContext(DrawerContext);

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          drawerContentVariants({
            position: position || context.position,
          }),
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            drawerHandleVariants({
              position: position || context.position,
            }),
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

type DrawerTitlePrimitive = typeof DrawerPrimitive.Title;
export type DrawerTitleProps = ComponentPropsWithoutRef<DrawerTitlePrimitive>;
const DrawerTitle: ForwardRefExoticComponent<
  DrawerTitleProps & RefAttributes<ComponentRef<DrawerTitlePrimitive>>
> = forwardRef<ComponentRef<DrawerTitlePrimitive>, DrawerTitleProps>(
  ({ className, ...props }, ref) => (
    <DrawerPrimitive.Title
      ref={ref}
      className={cn(
        "text-lg font-semibold leading-none tracking-tight text-balance",
        className,
      )}
      {...props}
    />
  ),
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

type DrawerDescriptionPrimitive = typeof DrawerPrimitive.Description;
export type DrawerDescriptionProps =
  ComponentPropsWithoutRef<DrawerDescriptionPrimitive>;
const DrawerDescription: ForwardRefExoticComponent<
  DrawerDescriptionProps &
    RefAttributes<ComponentRef<DrawerDescriptionPrimitive>>
> = forwardRef<
  ComponentRef<DrawerDescriptionPrimitive>,
  DrawerDescriptionProps
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground text-pretty", className)}
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
