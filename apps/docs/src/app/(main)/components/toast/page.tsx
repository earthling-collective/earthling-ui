import { ComponentSublayout } from "../sublayout";
import { componentMetadata } from "@/lib/component-metadata";

export const metadata = componentMetadata("toast");

export default async function () {
  return (
    <ComponentSublayout
      path="toast"
      anatomy={`<ToastProvider>
  <Toast>
    <ToastTitle />
    <ToastDescription />
    <ToastAction />
    <ToastClose />
  </Toast>
  <ToastViewport />
</ToastProvider>`}
    />
  );
}
