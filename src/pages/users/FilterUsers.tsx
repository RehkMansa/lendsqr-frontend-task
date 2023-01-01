import Select from "react-select";
import styled from "./FilterUsers.module.scss";
import { DefaultInput } from "../../components/elements/Input";
import { toCamelCase } from "../../utils/formatWord";
import Button from "../../components/elements/Buttons";

type Props = {
    organizations: { value: string; label: string }[];
};

const status = ["Pending", "Inactive", "Blacklisted", "Active"];

const fields = [
    { name: "username" },
    { name: "email", type: "email" },
    { name: "date", type: "date" },
    { name: "phone number" },
];

const FilterUsers = ({ organizations }: Props) => (
    <div className={styled.filter}>
        <div className={styled.filter__input}>
            <p>Organizations</p>
            <Select options={organizations} />
        </div>
        {fields.map(({ name, type }) => (
            <div className={styled.filter__input} key={name}>
                <p>{name}</p>
                <DefaultInput
                    name={toCamelCase(name)}
                    type={type}
                    error=""
                    placeholder={name}
                />
            </div>
        ))}
        <div className={styled.filter__input}>
            <p>Status</p>
            <Select options={status} />
        </div>
        <div className={styled.filter__buttons}>
            <Button variant="transparent">Reset</Button>
            <Button>Filter</Button>
        </div>
    </div>
);

export default FilterUsers;
