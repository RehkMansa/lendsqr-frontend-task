import React, { Component, ErrorInfo, ReactNode } from "react";
import styled from "./ErrorBoundary.module.scss";
import ErrorMessage from "../../blocks/ErrorMessage";
import Alert from "../../../utils/alert";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    public static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        Alert(error.message, "error");
    }

    public render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return (
                <main className={styled.error__boundary}>
                    <ErrorMessage error="Looks like we encountered an error while trying to process your request, please reload the page to continue or contact admin" />
                </main>
            );
        }

        return children;
    }
}

export default ErrorBoundary;

// gotten from: https://reactjs.org/docs/error-boundaries.html
