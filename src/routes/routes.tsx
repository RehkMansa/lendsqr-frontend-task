import loadable from "@loadable/component";
import { useRoutes } from "react-router-dom";

const Login = loadable(() => import("../pages/login/index"));
const DashboardLayout = loadable(() => import("../components/layouts/DashboardLayout"));
const Users = loadable(() => import("../pages/users"));
const NotFound = loadable(() => import("../pages/notFound"));

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
                    element: <Users />,
                },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return routes;
};

export default AppRoutes;
