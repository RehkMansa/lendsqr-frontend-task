import Users from "../../../assets/icons/stats/users.svg";
import ActiveUsersIcon from "../../../assets/icons/stats/active-users.svg";
import UsersWithSavingsIcon from "../../../assets/icons/stats/users-with-savings.svg";
import UsersWithLoansIcon from "../../../assets/icons/stats/users-with-loans.svg";
import MetaInfo from "../../elements/MetaInfo";
import styled from "./MetaArea.module.scss";

const options = [
    {
        name: "users",
        value: "2,453",
        icon: Users,
    },
    {
        name: "active users",
        icon: ActiveUsersIcon,
        value: "2,453",
    },
    {
        name: "users with loans",
        icon: UsersWithLoansIcon,
        value: "12,453",
    },
    {
        name: "users with savings",
        icon: UsersWithSavingsIcon,
        value: "10,453",
    },
];
const MetaArea = () => (
    <div className={styled.wrapper}>
        {options.map((option) => (
            <MetaInfo {...option} key={option.name} />
        ))}
    </div>
);

export default MetaArea;
