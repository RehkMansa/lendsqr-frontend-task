import { Outlet } from "react-router-dom";
import SideBar from "../../blocks/SideBar";

const DashboardLayout = () => (
    <main>
        <SideBar />
        <section>
            <Outlet />
        </section>
    </main>
);
export default DashboardLayout;
