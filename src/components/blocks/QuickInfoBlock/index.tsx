// import { memo } from "react";
import Users from "../../../assets/icons/stats/users.svg";
import ActiveUsersIcon from "../../../assets/icons/stats/active-users.svg";
import UsersWithSavingsIcon from "../../../assets/icons/stats/users-with-savings.svg";
import UsersWithLoansIcon from "../../../assets/icons/stats/users-with-loans.svg";
import QuickInfo from "../../elements/QuickInfo/QuickInfo";
import styled from "./QuickInfoBlock.module.scss";

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
const QuickInfoBlock = () => (
    <div className={styled.wrapper}>
        {options.map((option) => (
            <QuickInfo {...option} key={option.name} />
        ))}
    </div>
);

export default QuickInfoBlock;
