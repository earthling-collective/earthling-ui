"use client";
import {
  cloneElement,
  Component,
  type ReactElement,
  type ReactNode,
} from "react";
import { useComponentSandbox } from "./context";
class PreviewBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <p
        role="alert"
        className="text-muted-foreground max-w-sm text-center text-sm leading-6"
      >
        This combination cannot be previewed. Adjust the controls or reset the
        playground.
      </p>
    ) : (
      this.props.children
    );
  }
}
export function ComponentSandboxPreview({
  example,
}: {
  example: ReactElement;
}) {
  const { props, revision } = useComponentSandbox();
  return (
    <div
      data-preview
      className="preview-canvas flex min-h-80 items-center justify-center overflow-auto rounded-xl border px-6 py-12 md:px-10"
    >
      <div className="grid w-full max-w-xl min-w-0 place-items-center">
        <PreviewBoundary key={JSON.stringify(props) + revision}>
          {cloneElement(example, props)}
        </PreviewBoundary>
      </div>
    </div>
  );
}
