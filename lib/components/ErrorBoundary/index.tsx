import { ReactNode, Component } from "react";

type ErrorBoundaryProps = {
  fallback?: (error: Error) => ReactNode;
  children?: ReactNode;
};

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  { error: Error | null }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error | null) {
    this.setState({
      error: error,
    });
    console.error(error);
  }

  render() {
    return this.state.error
      ? this.props.fallback?.(this.state.error)
      : this.props.children;
  }
}
