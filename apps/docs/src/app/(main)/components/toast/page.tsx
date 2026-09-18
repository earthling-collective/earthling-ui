import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";
import Example from "./example";

export const metadata = componentMetadata("toast");

export default async function () {
  return (
    <ComponentSublayout
      path="toast"
      anatomy={
        '<ToastProvider>\n  <Toast defaultOpen>\n    <ToastTitle>Changes saved</ToastTitle>\n    <ToastDescription>\n      Your workspace preferences are up to date.\n    </ToastDescription>\n    <ToastAction altText="Undo saved changes">Undo</ToastAction>\n    <ToastClose />\n  </Toast>\n  <ToastViewport />\n</ToastProvider>'
      }
      example={<Example />}
    />
  );
}
