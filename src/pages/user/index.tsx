import ErrorMessage from "../../components/blocks/ErrorMessage";
import MetaArea from "../../components/blocks/MetaArea";
import UsersTable from "../../components/blocks/UsersTable";
import useFetch from "../../hooks/useFetch";
import { UserResponseType } from "../../types/userResponse.type";
import styled from "./User.module.scss";

// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users

const User = () => {
    const { data, error } = useFetch<UserResponseType[]>("");

    if (!error) return <ErrorMessage message="An error occurred while getting users" />;

    if (data === undefined) return <div>Loading</div>;

    return (
        <section className={`${styled.user} space-y-20`}>
            <h1 className="text-2xl text-accent-darker font-semiMedium">Users</h1>
            <MetaArea />
            <UsersTable data={data} />
        </section>
    );
};

export default User;
