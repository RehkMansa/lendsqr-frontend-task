import { BsChevronDown } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { sidebarItems } from "./data";
import styles from "./Sidebar.module.scss";
import DashboardIcon from "../../../assets/icons/sidebar/dashboard.svg";
import SwitchOrg from "../../../assets/icons/sidebar/switch-organization.svg";

type Props = {
    iconName: string;
    src: string;
    dropDown: boolean;
    className?: string;
};

const NavItem = ({ iconName, src, dropDown, className }: Props) => (
    <NavLink className={`${styles.nav} ${className || ""}`} key={iconName} to="">
        <img src={src} alt={iconName} />
        <p className="text-base">{iconName}</p>
        {dropDown && <BsChevronDown />}
    </NavLink>
);

const SideBar = ({ open, closeModal }: { open: boolean; closeModal(): void }) => (
    <>
        <aside className={`${styles.aside} ${open ? styles.open : ""}`}>
            <div className="space-y-15">
                <div className="space-y-13">
                    <NavItem
                        dropDown
                        iconName="Switch Organization"
                        src={SwitchOrg}
                        className="text-accent-darker"
                    />
                    <NavItem dropDown={false} iconName="Dashboard" src={DashboardIcon} />
                </div>
                {sidebarItems.map(({ name, subItems }) => (
                    <div className={`${styles.wrapper} space-y-5`} key={name}>
                        <p className="text-sm uppercase text-primary font-semiMedium">
                            {name}
                        </p>
                        {subItems.map(({ name: iconName, src }) => (
                            <NavLink
                                className={({ isActive }) =>
                                    `${styles.nav} ${isActive ? styles.active : ""}`
                                }
                                key={iconName}
                                to={iconName.toLowerCase()}
                            >
                                <img src={src} alt={iconName} />
                                <p className="text-base">{iconName}</p>
                            </NavLink>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
        {open && <div className={styles.overlay} onClick={closeModal} role="none" />}
    </>
);

export default SideBar;
