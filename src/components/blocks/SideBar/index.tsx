import { sidebarItems } from "./data";

const SideBar = () => (
    <aside>
        {sidebarItems.map(({ name, subItems }) => (
            <div key={name}>
                {subItems.map(({ name: iconName, src }) => (
                    <div key={iconName}>
                        <img src={src} alt={iconName} />
                    </div>
                ))}
            </div>
        ))}
    </aside>
);

export default SideBar;
