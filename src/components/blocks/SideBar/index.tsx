import { sidebarItems } from "./data";
import styles from "./Sidebar.module.scss";

const SideBar = () => (
    <aside className={`${styles.aside} space-y-10`}>
        {sidebarItems.map(({ name, subItems }) => (
            <div className={`${styles.wrapper} space-y-3`} key={name}>
                <p>{name}</p>
                {subItems.map(({ name: iconName, src, isActive }) => (
                    <div
                        className={`${styles.nav} ${isActive ? styles.active : ""}`}
                        key={iconName}
                    >
                        <img src={src} alt={iconName} />
                        <p className="text-base">{iconName}</p>
                    </div>
                ))}
            </div>
        ))}
    </aside>
);

export default SideBar;
