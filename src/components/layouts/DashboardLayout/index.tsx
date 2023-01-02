import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from "../../blocks/SideBar";
import styles from "./Dashboard.module.scss";
import Header from "../../blocks/Header";
import store from "../../../utils/store";

const DashboardLayout = () => {
    const [showSideBar, setShowSideBar] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => setShowSideBar((c) => !c);

    const handleLogout = () => {
        store.remove("users");
        navigate("/");
    };

    return (
        <>
            <Header toggleSidebar={handleMenuToggle} />
            <main className={styles.main}>
                <SideBar
                    logout={handleLogout}
                    closeModal={handleMenuToggle}
                    open={showSideBar}
                />
                <section className={styles.outlet}>
                    <Outlet />
                </section>
            </main>
        </>
    );
};
export default DashboardLayout;
