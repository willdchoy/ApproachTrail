import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    console.log(error);
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  // async and reporting here
  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <h1>Error Boundry: Sorry, there was an error</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
