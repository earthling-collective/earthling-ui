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
  composeRenderProps,
} from "react-aria-components";
import { cn } from "@/utils/cn";
import { schemes } from "@/utils/variants";
import { cva, type VariantProps } from "class-variance-authority";

const TabsContext = createContext<Pick<TabProps, "size" | "scheme">>({
  size: "md",
  scheme: "primary",
});

//Tabs
export const tabsVariants = cva("", { variants: {}, defaultVariants: {} });

interface TabsProps
  extends
    ComponentPropsWithoutRef<typeof TabsPrimitive>,
    VariantProps<typeof tabsVariants>,
    ContextType<typeof TabsContext> {}

const Tabs = forwardRef<ComponentRef<typeof TabsPrimitive>, TabsProps>(
  ({ className, size = "md", scheme = "primary", ...props }, ref) => {
    return (
      <TabsContext.Provider value={{ size, scheme }}>
        <TabsPrimitive
          ref={ref}
          {...props}
          className={composeRenderProps(className, (value) =>
            cn(tabsVariants({}), value),
          )}
        />
      </TabsContext.Provider>
    );
  },
);
Tabs.displayName = "Tabs";

//TabList
const tabListVariants = cva("flex flex-row border-b border-current/15", {
  variants: {},
  defaultVariants: {},
});

export interface TabListProps
  extends
    ComponentPropsWithoutRef<typeof TabListPrimitive>,
    VariantProps<typeof tabListVariants> {}

const TabList = forwardRef<ComponentRef<typeof TabListPrimitive>, TabListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabListPrimitive
        ref={ref}
        {...props}
        className={composeRenderProps(className, (value) =>
          cn(tabListVariants({}), value),
        )}
      />
    );
  },
);
TabList.displayName = "TabList";

//Tab
const tabVariants = cva(
  "-mb-px inline-flex cursor-pointer items-center justify-center border-b-2 border-transparent ring-offset-background outline-none ring-outline hover:bg-(--scheme-tint)/5 focus-visible:relative focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-disabled:cursor-not-allowed data-disabled:opacity-50 aria-selected:border-b-(--scheme-tint)",
  {
    variants: {
      size: { sm: "h-9 px-3 text-sm", md: "h-10 px-4", lg: "h-11 px-8" },
      scheme: schemes,
    },
    defaultVariants: { size: "md", scheme: "primary" },
  },
);

export interface TabProps
  extends
    ComponentPropsWithoutRef<typeof TabPrimitive>,
    VariantProps<typeof tabVariants> {}

const Tab = forwardRef<ComponentRef<typeof TabPrimitive>, TabProps>(
  ({ className, size, scheme, ...props }, ref) => {
    const context = useContext(TabsContext);

    return (
      <TabPrimitive
        ref={ref}
        {...props}
        className={composeRenderProps(className, (value) =>
          cn(
            tabVariants({
              size: size ?? context.size,
              scheme: scheme ?? context.scheme,
            }),
            value,
          ),
        )}
      />
    );
  },
);
Tab.displayName = "Tab";

//TabPanel
const tabPanelVariants = cva(
  "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline focus-visible:ring-offset-2",
  { variants: {}, defaultVariants: {} },
);

export interface TabPanelProps
  extends
    ComponentPropsWithoutRef<typeof TabPanelPrimitive>,
    VariantProps<typeof tabPanelVariants> {}

const TabPanel = forwardRef<
  ComponentRef<typeof TabPanelPrimitive>,
  TabPanelProps
>(({ className, ...props }, ref) => {
  return (
    <TabPanelPrimitive
      ref={ref}
      {...props}
      className={composeRenderProps(className, (value) =>
        cn(tabPanelVariants({}), value),
      )}
    />
  );
});
TabPanel.displayName = "TabPanel";

export { Tabs, TabList, TabPanel, Tab };
