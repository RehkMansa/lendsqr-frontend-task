import { Navigate, Outlet } from "react-router-dom";
import store from "../../../utils/store";

type UserType = { email: string; password: string };

const AuthGuard = () => {
    const users = store.get<UserType>("users");

    return users !== null ? <Outlet /> : <Navigate to="/" />;
};

export default AuthGuard;
