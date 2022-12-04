import { Button, Result, Space } from "components";
import { UI_TEXT } from "helpers/constants";
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

  public static getDerivedStateFromError(): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Space
          style={{
            //TODO: To add that in common styling
            height: "100vh",
            width: "100vw",
            justifyContent: "center",
          }}
        >
          <Result
            status="error"
            title={UI_TEXT.SOMETHING_WENT_WRONG.TITLE}
            subTitle={UI_TEXT.SOMETHING_WENT_WRONG.SUB_TITLE}
            extra={
              <Button type="primary" onClick={() => window.location.reload()}>
                {UI_TEXT.SOMETHING_WENT_WRONG.BUTTON}
              </Button>
            }
          />
        </Space>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
