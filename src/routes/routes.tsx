import loadable from "@loadable/component";
import { useRoutes } from "react-router-dom";

const Login = loadable(() => import("../pages/login/index"));

const AppRoutes = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Login />,
        },
    ]);

    return routes;
};

export default AppRoutes;
