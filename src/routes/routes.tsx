import loadable from "@loadable/component";
import { useRoutes } from "react-router-dom";
import AuthGuard from "../components/hoc/AuthGuard";

const Login = loadable(() => import("../pages/login/index"));
const DashboardLayout = loadable(() => import("../components/layouts/DashboardLayout"));
const Users = loadable(() => import("../pages/users"));
const UserDetails = loadable(() => import("../pages/users/userdetails"));
const NotFound = loadable(() => import("../pages/notFound"));

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Login />,
        },
        {
            element: <AuthGuard />,
            children: [
                {
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "users",
                            element: <Users />,
                        },
                        {
                            path: "users/:id",
                            element: <UserDetails />,
                        },
                    ],
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
