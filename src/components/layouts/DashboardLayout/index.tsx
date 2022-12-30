import { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../blocks/SideBar";
import styles from "./Dashboard.module.scss";
import Header from "../../blocks/Header";

const DashboardLayout = () => {
    const [showSideBar, setShowSideBar] = useState(false);

    const handleMenuToggle = () => setShowSideBar((c) => !c);

    return (
        <>
            <Header toggleSidebar={handleMenuToggle} />
            <main className={styles.main}>
                <SideBar open={showSideBar} />
                <section className={styles.outlet}>
                    <Outlet />
                </section>
            </main>
        </>
    );
};
export default DashboardLayout;
