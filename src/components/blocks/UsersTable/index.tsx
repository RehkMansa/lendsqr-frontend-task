import { BsThreeDotsVertical, BsFilter } from "react-icons/bs";
import styled from "./UserTable.module.scss";
import { toCamelCase } from "../../../utils/formatWord";

const headerItems = [
    { name: "organization", span: 1 },
    { name: "username", span: 1 },
    { name: "email", span: 2 },
    { name: "phone number", span: 1 },
    { name: "date joined", span: 2 },
    { name: "status", span: 2 },
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
        <div role="cell" aria-labelledby="organization">
            {org}
        </div>
        <div role="cell" aria-labelledby="username">
            {username}
        </div>
        <div role="cell" className={styled.span2} aria-labelledby="email">
            {email}
        </div>
        <div role="cell" aria-labelledby="phoneNumber">
            {phoneNumber}
        </div>
        <div role="cell" className={styled.span2} aria-labelledby="dateJoined">
            {dateJoined}
        </div>{" "}
        <div
            role="cell"
            className={`${styled.span2} ${styled.status}`}
            aria-labelledby="status"
        >
            {status}
            <BsThreeDotsVertical />
        </div>
    </div>
);

const UsersTable = () => (
    <div className={styled.table} role="table">
        <div
            className={`text-xs font-medium uppercase ${styled.table__header}`}
            role="row"
        >
            {headerItems.map(({ name, span }) => (
                <div
                    id={toCamelCase(name)}
                    className={span === 2 ? styled.span2 : ""}
                    role="cell"
                    key="name"
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
);

export default UsersTable;
