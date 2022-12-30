import MetaArea from "../../components/blocks/MetaArea";
import UsersTable from "../../components/blocks/UsersTable";
import styled from "./User.module.scss";

const User = () => (
    <section className={`${styled.user} space-y-20`}>
        <h1 className="text-2xl text-accent-darker font-semiMedium">Users</h1>
        <MetaArea />
        <UsersTable />
    </section>
);

export default User;
