import { Outlet } from "react-router-dom";
import SideBar from "../../blocks/SideBar";
import styles from "./Dashboard.module.scss";
import Header from "../../blocks/Header";

const DashboardLayout = () => (
    <>
        <Header />
        <main className={styles.main}>
            <SideBar />
            <section className={styles.outlet}>
                <Outlet />
            </section>
        </main>
    </>
);
export default DashboardLayout;
