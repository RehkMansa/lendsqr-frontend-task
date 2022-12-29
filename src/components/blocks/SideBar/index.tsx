import { sidebarItems } from "./data";

const SideBar = () => (
    <aside>
        {sidebarItems.map(({ name, subItems }) => (
            <div key={name}>
                <p>{name}</p>
                {subItems.map(({ name: iconName, src }) => (
                    <div key={iconName}>
                        <img src={src} alt={iconName} />
                        <p>{iconName}</p>
                    </div>
                ))}
            </div>
        ))}
    </aside>
);

export default SideBar;
