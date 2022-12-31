import ErrorMessage from "../../components/blocks/ErrorMessage";
import MetaArea from "../../components/blocks/MetaArea";
import UsersTable from "../../components/blocks/UsersTable";
// import UsersSkeletonLoader from "../../components/blocks/UsersTable/UsersSkeletonLoader";
import useFetch from "../../hooks/useFetch";
import { UserResponseType } from "../../types/userResponse.type";

// https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users

const User = () => {
    const { data, error } = useFetch<UserResponseType[]>(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
    );

    if (error) return <ErrorMessage message="An error occurred while getting users" />;

    console.log(data);

    return (
        <section className="space-y-20">
            <h1 className="text-2xl text-accent-darker font-semiMedium">Users</h1>
            <MetaArea />
            {data ? <UsersTable data={data} /> : <div />}
        </section>
    );
};

export default User;
