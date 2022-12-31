import React from "react";
import ReactDOM from "react-dom/client";
import KickOff from "./routes";
import "./styles/index.scss";
import ErrorBoundary from "./components/hoc/ErrroBoundary";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ErrorBoundary>
            <KickOff />
        </ErrorBoundary>
    </React.StrictMode>
);
