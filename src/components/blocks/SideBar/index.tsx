import { BsChevronDown } from "react-icons/bs";
import { sidebarItems } from "./data";
import styles from "./Sidebar.module.scss";
import DashboardIcon from "../../../assets/icons/sidebar/dashboard.svg";
import SwitchOrg from "../../../assets/icons/sidebar/switch-organization.svg";

type Props = {
    isActive: boolean;
    iconName: string;
    src: string;
    dropDown: boolean;
    className?: string;
};

const NavItem = ({ isActive, iconName, src, dropDown, className }: Props) => (
    <div
        className={`${styles.nav} ${isActive ? styles.active : ""} ${className || ""}`}
        key={iconName}
    >
        <img src={src} alt={iconName} />
        <p className="text-base">{iconName}</p>
        {dropDown && <BsChevronDown />}
    </div>
);

const SideBar = ({ open, closeModal }: { open: boolean; closeModal(): void }) => (
    <>
        <aside className={`${styles.aside} ${open ? styles.open : ""}`}>
            <div className="space-y-15">
                <div className="space-y-13">
                    <NavItem
                        dropDown
                        isActive={false}
                        iconName="Switch Organization"
                        src={SwitchOrg}
                        className="text-accent-darker"
                    />
                    <NavItem
                        dropDown={false}
                        isActive={false}
                        iconName="Dashboard"
                        src={DashboardIcon}
                    />
                </div>
                {sidebarItems.map(({ name, subItems }) => (
                    <div className={`${styles.wrapper} space-y-5`} key={name}>
                        <p className="text-sm uppercase text-primary font-semiMedium">
                            {name}
                        </p>
                        {subItems.map(({ name: iconName, src, isActive }) => (
                            <div
                                className={`${styles.nav} ${
                                    isActive ? styles.active : ""
                                }`}
                                key={iconName}
                            >
                                <img src={src} alt={iconName} />
                                <p className="text-base">{iconName}</p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </aside>
        {open && <div className={styles.overlay} onClick={closeModal} role="none" />}
    </>
);

export default SideBar;
