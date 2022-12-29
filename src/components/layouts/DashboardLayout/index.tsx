import { Outlet } from "react-router-dom";
import SideBar from "../../blocks/SideBar";
import styles from "./Dashboard.module.scss";

const DashboardLayout = () => (
    // header goes here
    <main className={styles.main}>
        <SideBar />
        <section>
            <Outlet />
        </section>
    </main>
);
export default DashboardLayout;
