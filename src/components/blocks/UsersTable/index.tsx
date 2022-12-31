import { BsThreeDotsVertical, BsFilter } from "react-icons/bs";
import styled from "./UserTable.module.scss";
import { toCamelCase } from "../../../utils/formatWord";
import { UserResponseType } from "../../../types/userResponse.type";

const headerItems = [
    { name: "organization", className: "table__desktop" },
    { name: "org/username", className: "table__tablet" },
    { name: "username", className: "table__desktop" },
    { name: "email", span: "span2", className: "table__desktop" },
    { name: "phone number", className: "table__desktop" },
    { name: "personal info", span: "span2", className: "table__tablet" },
    { name: "date joined", className: "table__desktop", span: "span2" },
    { name: "status", span: "span2", className: "table__desktop" },
    { name: "date joined/status", span: "span3", className: "table__tablet" },
];

const dummyPerson = {
    org: "Lendsqr",
    username: "rehkmansa",
    email: "rehkmansa25@gmail.com",
    phoneNumber: "09065068997",
    dateJoined: "May 15, 2020 10:00 AM",
    status: "Pending",
};

const dummyArr = new Array(50).fill(0).map((_, idx) => 1 + idx);

const TableRowItem = ({
    org,
    username,
    email,
    phoneNumber,
    dateJoined,
    status,
}: typeof dummyPerson) => (
    <div role="row" className={styled.table__content}>
        <div className={styled.personal__info}>
            <div role="cell" aria-labelledby="organization">
                {org}
            </div>
            <div className={styled.table__tablet} role="cell" aria-labelledby="username">
                {username}
            </div>
        </div>
        <div
            className={`${styled.table__tablet} ${styled.span2} ${styled.personal__info}`}
        >
            <div role="cell" aria-labelledby="phoneNumber">
                {phoneNumber}
            </div>
            <div role="cell" className={styled.span2} aria-labelledby="email">
                {email}
            </div>
        </div>
        <div role="cell" className={styled.table__desktop} aria-labelledby="username">
            {username}
        </div>
        <div
            role="cell"
            className={`${styled.span2} ${styled.table__desktop}`}
            aria-labelledby="email"
        >
            {email}
        </div>
        <div role="cell" className={styled.table__desktop} aria-labelledby="phoneNumber">
            {phoneNumber}
        </div>
        <div
            role="cell"
            className={`${styled.span2} ${styled.table__desktop}`}
            aria-labelledby="dateJoined"
        >
            {dateJoined}
        </div>
        <div className={`${styled.table__tablet} ${styled.status}  ${styled.span3}`}>
            <div role="cell" className={styled.personal__info} aria-labelledby="status">
                <p>Date joined: {dateJoined}</p>
                <p>Status: {status}</p>
            </div>
            <BsThreeDotsVertical />
        </div>
        <div
            role="cell"
            className={`${styled.span2} ${styled.table__desktop} ${styled.status}`}
            aria-labelledby="status"
        >
            {status}
            <BsThreeDotsVertical />
        </div>
    </div>
);

const UsersTable = ({ data }: { data: UserResponseType[] }) => (
    <>
        <div className={styled.table} role="table">
            <div
                className={`text-xs font-medium uppercase ${styled.table__header}`}
                role="row"
            >
                {headerItems.map(({ name, span, className }) => (
                    <div
                        id={toCamelCase(name)}
                        className={`${span ? styled[span] : ""} ${
                            className ? styled[className] : ""
                        }`}
                        role="cell"
                        key={name}
                    >
                        <div className="">{name}</div>
                        <BsFilter role="button" aria-label="filter" size={17} />
                    </div>
                ))}
            </div>
            {dummyArr.map((n, i) => (
                <TableRowItem key={n} {...dummyPerson} />
            ))}
        </div>

        <div className={styled.wrapper}>
            <table className={styled.mobile__table}>
                <thead>
                    <tr className="text-xs uppercase">
                        <th>Org/username</th>
                        <th>Personal Info</th>
                        <th>Date Joined/Status</th>
                        <th className={styled.control__header}>.</th>
                    </tr>
                </thead>
                <tbody className="text-sm space-y-10">
                    {dummyArr.slice(0, 20).map((n) => (
                        <tr key={n}>
                            <td>
                                <div className={styled.org__info}>
                                    <p>Lendsqr</p>
                                    <p>rehkmansa</p>
                                </div>
                            </td>
                            <td>
                                <div className={styled.personal__info}>
                                    <p>09065068997</p>
                                    <p>godspower@gmail.com</p>
                                </div>
                            </td>
                            <td>
                                <div className={styled.meta__info}>
                                    <div>
                                        <p>March 12, 2022</p>
                                        <p>Pending</p>
                                    </div>
                                    <BsThreeDotsVertical />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </>
);

export default UsersTable;
