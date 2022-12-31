import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";
import { SuspenseLoader } from "../components/elements/Loaders";

const KickOff = () => (
    <Router>
        <Toaster />
        <Suspense fallback={<SuspenseLoader />}>
            <AppRoutes />
        </Suspense>
    </Router>
);

export default KickOff;
