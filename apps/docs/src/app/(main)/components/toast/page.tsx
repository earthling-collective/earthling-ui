import { ComponentSublayout } from "../sublayout";

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
