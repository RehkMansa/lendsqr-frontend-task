import { useState } from "react";
import dayjs from "dayjs";
import { BsEye, BsPersonCheck, BsPersonX, BsThreeDotsVertical } from "react-icons/bs";
import styled from "./UserTable.module.scss";
import useOnClickOutside from "../../../hooks/useOnclickOutside";

type Props = {
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
};

const DropDown = () => (
    <div className={styled.dropdown}>
        <p>
            <BsEye size={16} />
            View Details
        </p>
        <p>
            <BsPersonX size={16} />
            Blacklist user
        </p>
        <p>
            <BsPersonCheck size={16} />
            Activate user
        </p>
    </div>
);

const formatOrganizationName = (str: string) => str.split("-")[0];

const DesktopTableRow = ({ createdAt, email, orgName, phoneNumber, userName }: Props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownRef = useOnClickOutside<HTMLDivElement>(() => setShowDropDown(false));

    return (
        <tr>
            <td>{formatOrganizationName(orgName)}</td>
            <td>{userName}</td>
            <td>{email}</td>
            <td>{phoneNumber}</td>
            <td>{dayjs(createdAt).format("MMM D, YYYY h:mm A")}</td>
            <td>
                <div className={styled.meta__info}>
                    <p className={styled.status__info}>Pending</p>
                    <div ref={dropdownRef} className={styled.dropdown__wrapper}>
                        <BsThreeDotsVertical
                            onClick={() => setShowDropDown((op) => !op)}
                            size={16}
                        />

                        {showDropDown && <DropDown />}
                    </div>
                </div>
            </td>
        </tr>
    );
};

const MobileTableRow = ({ orgName, userName, email, phoneNumber, createdAt }: Props) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const dropdownRef = useOnClickOutside<HTMLDivElement>(() => setShowDropDown(false));

    return (
        <tr>
            <td>
                <div className={styled.org__info}>
                    <p>{formatOrganizationName(orgName)}</p>
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
                    <div ref={dropdownRef} className={styled.dropdown__wrapper}>
                        <BsThreeDotsVertical
                            onClick={() => setShowDropDown((op) => !op)}
                            size={16}
                        />
                        {showDropDown && <DropDown />}
                    </div>
                </div>
            </td>
        </tr>
    );
};

export { MobileTableRow, DesktopTableRow };
