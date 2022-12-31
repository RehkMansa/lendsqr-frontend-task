import dayjs from "dayjs";
import { BsThreeDotsVertical, BsFilter } from "react-icons/bs";
import styled from "./UserTable.module.scss";
import { UserResponseType } from "../../../types/userResponse.type";

const headerItems = [
    { name: "organization" },
    { name: "username" },
    { name: "email" },
    { name: "phone number" },
    { name: "date joined" },
    { name: "status" },
];

export const dummyPerson = {
    org: "Lendsqr",
    username: "rehkmansa",
    email: "rehkmansa25@gmail.com",
    phoneNumber: "09065068997",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Pending",
};

const UsersTable = ({ data }: { data: UserResponseType[] }) => (
    <div className={styled.wrapper}>
        <table className={`${styled.table} ${styled.md__table}`}>
            <thead>
                <tr>
                    {headerItems.map(({ name }) => (
                        <th key={name}>
                            <div>
                                {name}
                                <BsFilter />
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map(({ id, orgName, userName, email, phoneNumber, createdAt }) => (
                    <tr key={id}>
                        <td>{orgName.slice(0, 8)}</td>
                        <td>{userName}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                        <td>{dayjs(createdAt).format("MMM D, YYYY h:mm A")}</td>
                        <td>
                            <div className={styled.meta__info}>
                                <p className={styled.status__info}>Pending</p>{" "}
                                <BsThreeDotsVertical size={16} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

        <table className={`${styled.table} ${styled.mobile__table}`}>
            <thead>
                <tr className="text-xs uppercase">
                    <th>Org/username</th>
                    <th>Personal Info</th>
                    <th>Date Joined/Status</th>
                    <th className={styled.control__header}>.</th>
                </tr>
            </thead>
            <tbody className="text-sm space-y-10">
                {data.map(({ id, orgName, userName, email, phoneNumber, createdAt }) => (
                    <tr key={id}>
                        <td>
                            <div className={styled.org__info}>
                                <p>{orgName.slice(0, 4)}</p>
                                <p>{userName}</p>
                            </div>
                        </td>
                        <td>
                            <div className={styled.personal__info}>
                                <p>{phoneNumber}</p>
                                <p>{email}</p>
                            </div>
                        </td>
                        <td>
                            <div className={styled.meta__info}>
                                <div>
                                    <p>{dayjs(createdAt).format("MMM D, YYYY")}</p>
                                    <p className={styled.status__info}>Pending</p>
                                </div>
                                <BsThreeDotsVertical size={16} />
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export default UsersTable;
