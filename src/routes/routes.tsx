import loadable from "@loadable/component";
import { useRoutes } from "react-router-dom";

const Login = loadable(() => import("../pages/login/index"));
const DashboardLayout = loadable(() => import("../components/layouts/DashboardLayout"));
const User = loadable(() => import("../pages/user"));

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Login />,
        },
        {
            element: <DashboardLayout />,
            children: [
                {
                    path: "users",
                    element: <User />,
                },
            ],
        },
    ]);

    return routes;
};

export default AppRoutes;
