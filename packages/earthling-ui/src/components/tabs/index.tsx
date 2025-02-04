"use client";

import {
  createContext,
  forwardRef,
  useContext,
  type ComponentPropsWithoutRef,
  type ComponentRef,
  type ContextType,
} from "react";
import {
  Tab as TabPrimitive,
  TabList as TabListPrimitive,
  TabPanel as TabPanelPrimitive,
  Tabs as TabsPrimitive,
} from "react-aria-components";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const TabsContext = createContext<Pick<TabProps, "size" | "scheme">>({
  size: "md",
  scheme: "primary",
});

//Tabs
export const tabsVariants = cva("", {
  variants: {},
  defaultVariants: {},
});

interface TabsProps
  extends ComponentPropsWithoutRef<typeof TabsPrimitive>,
    VariantProps<typeof tabsVariants>,
    ContextType<typeof TabsContext> {}

const Tabs = forwardRef<ComponentRef<typeof TabsPrimitive>, TabsProps>(
  ({ className, size, scheme, ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ size, scheme }}>
        <TabsPrimitive
          ref={ref}
          {...props}
          className={cn(tabsVariants({}), className)}
        />
      </TabsContext.Provider>
    );
  }
);
Tabs.displayName = "Tabs";

//TabList
const tabListVariants = cva("flex flex-row", {
  variants: {},
  defaultVariants: {},
});

export interface TabListProps
  extends ComponentPropsWithoutRef<typeof TabListPrimitive>,
    VariantProps<typeof tabListVariants> {}

const TabList = forwardRef<ComponentRef<typeof TabListPrimitive>, TabListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabListPrimitive
        ref={ref}
        {...props}
        className={cn(tabListVariants({}), className)}
      />
    );
  }
);
TabList.displayName = "TabList";

//Tab
const tabVariants = cva(
  "border-b-2 border-transparent aria-selected:border-b-[var(--scheme-tint)] outline-none ring-outline focus-visible:ring-2 cursor-pointer inline-flex items-center justify-center transition-colors hover:bg-[var(--scheme-tint)]/5",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4",
        lg: "h-11 px-8",
      },
      scheme: {
        primary: `[--scheme-tint:var(--color-primary);--scheme-foreground:var(--color-primary-foreground)]`,
        secondary: `[--scheme-tint:var(--color-secondary);--scheme-foreground:var(--color-secondary-foreground)]`,
        tertiary: `[--scheme-tint:var(--color-tertiary);--scheme-foreground:var(--color-tertiary-foreground)]`,
        muted: `[--scheme-tint:var(--color-muted);--scheme-foreground:var(--color-muted-foreground)]`,
        good: `[--scheme-tint:var(--color-good);--scheme-foreground:var(--color-good-foreground)]`,
        caution: `[--scheme-tint:var(--color-caution);--scheme-foreground:var(--color-caution-foreground)]`,
        bad: `[--scheme-tint:var(--color-bad);--scheme-foreground:var(--color-bad-foreground)]`,
      },
    },
    defaultVariants: {
      size: "md",
      scheme: "primary",
    },
  }
);

export interface TabProps
  extends ComponentPropsWithoutRef<typeof TabPrimitive>,
    VariantProps<typeof tabVariants> {}

const Tab = forwardRef<ComponentRef<typeof TabPanelPrimitive>, TabProps>(
  ({ className, size, scheme, ...props }, ref) => {
    const context = useContext(TabsContext);

    return (
      <TabPrimitive
        ref={ref}
        {...props}
        className={cn(
          tabVariants({
            size: size || context.size,
            scheme: scheme || context.scheme,
          }),
          className
        )}
      />
    );
  }
);
Tab.displayName = "Tab";

//TabPanel
const tabPanelVariants = cva("", { variants: {}, defaultVariants: {} });

export interface TabPanelProps
  extends ComponentPropsWithoutRef<typeof TabPanelPrimitive>,
    VariantProps<typeof tabPanelVariants> {}

const TabPanel = forwardRef<
  ComponentRef<typeof TabPanelPrimitive>,
  TabPanelProps
>(({ className, ...props }, ref) => {
  return (
    <TabPanelPrimitive
      ref={ref}
      {...props}
      className={cn(tabPanelVariants({}), className)}
    />
  );
});
TabPanel.displayName = "TabPanel";

export { Tabs, TabList, TabPanel, Tab };
