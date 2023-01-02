import { memo, useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { BsEye, BsPersonCheck, BsPersonX, BsThreeDotsVertical } from "react-icons/bs";
import styled from "./UserTable.module.scss";
import useOnClickOutside from "../../../hooks/useOnclickOutside";
import { splitStringByHyphen } from "../../../utils/formatWord";

type Props = {
    orgName: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: string;
    id: string;
};

const DropDown = ({ id }: { id: string }) => (
    <div className={styled.dropdown}>
        <Link to={id}>
            <BsEye size={16} />
            View Details
        </Link>
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

const DesktopTableRow = memo(
    ({ createdAt, email, orgName, phoneNumber, userName, id }: Props) => {
        const [showDropDown, setShowDropDown] = useState(false);
        const dropdownRef = useOnClickOutside<HTMLDivElement>(() =>
            setShowDropDown(false)
        );

        return (
            <tr>
                <td>{splitStringByHyphen(orgName)}</td>
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

                            {showDropDown && <DropDown id={id} />}
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
);

// using memo to prevent the row from re rendering
const MobileTableRow = memo(
    ({ orgName, userName, email, phoneNumber, createdAt, id }: Props) => {
        const [showDropDown, setShowDropDown] = useState(false);
        const dropdownRef = useOnClickOutside<HTMLDivElement>(() =>
            setShowDropDown(false)
        );

        return (
            <tr>
                <td>
                    <div className={styled.org__info}>
                        <p>{splitStringByHyphen(orgName)}</p>
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
                            {showDropDown && <DropDown id={id} />}
                        </div>
                    </div>
                </td>
            </tr>
        );
    }
);

export { MobileTableRow, DesktopTableRow };
