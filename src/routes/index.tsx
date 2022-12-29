import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes";

const KickOff = () => (
    <Router>
        <Toaster />
        <Suspense fallback={<div>Loading....</div>}>
            <AppRoutes />
        </Suspense>
    </Router>
);

export default KickOff;
