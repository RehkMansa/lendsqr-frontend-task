import { memo } from "react";
import { BsFilter } from "react-icons/bs";
import styled from "./UserTable.module.scss";
import { UserResponseType } from "../../../types/userResponse.type";
import { DesktopTableRow, MobileTableRow } from "./TableRow";

type Props = { data: UserResponseType[]; filterItems(): void };

const desktopHeader = [
    "organization",
    "username",
    "email",
    "phone number",
    "date joined",
    "status",
];

const mobileHeader = ["Org/Username", "Personal Info", "Date Joined/ Status"];

const UsersTable = ({ data, filterItems }: Props) => (
    <div className={styled.wrapper}>
        <table className={`${styled.table} ${styled.md__table}`}>
            <thead>
                <tr>
                    {desktopHeader.map((header) => (
                        <th key={header}>
                            <div role="button" onClick={filterItems}>
                                {header}
                                <BsFilter />
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row) => (
                    <DesktopTableRow key={row.id} {...row} />
                ))}
            </tbody>
        </table>

        {/* This table is for mobile, the layout is different from desktop  */}
        <table className={`${styled.table} ${styled.mobile__table}`}>
            <thead>
                <tr className="text-xs uppercase">
                    {mobileHeader.map((header) => (
                        <th key={header}>
                            <div role="button" onClick={filterItems}>
                                {header}
                                <BsFilter />
                            </div>
                        </th>
                    ))}
                    {/* control header makes sure there is enough space when scrolling right */}
                    <th className={styled.control__header}>.</th>
                </tr>
            </thead>
            <tbody className="text-sm space-y-10">
                {data.map((row) => (
                    <MobileTableRow key={row.id} {...row} />
                ))}
            </tbody>
        </table>
    </div>
);

export default memo(UsersTable); //  used memo to prevent unnecessary re-renders
