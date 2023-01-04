import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { UserResponseType } from "../../../types/userResponse.type";
import { convertCamelCaseToString } from "../../../utils/formatWord";
import DetailsHeader from "./DetailsHeader";
import styled from "./UserDetails.module.scss";
import { FullScreenLoader } from "../../../components/elements/Loaders";
import ErrorMessage from "../../../components/blocks/ErrorMessage";
import Button from "../../../components/elements/Buttons";

const UserInfoCard = ({ name, value }: { name: string; value: string }) => (
    <div className="space-y-2">
        <h5 className="text-xs uppercase">{name}</h5>
        <p className="text-base font-semiMedium">{value}</p>
    </div>
);

const UserDetails = () => {
    const { id } = useParams();
    const { data, error } = useFetch<UserResponseType>(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
    );

    if (error) return <ErrorMessage message={error.message} />;

    if (data === undefined) return <FullScreenLoader />;

    const { profile, socials, education, guarantor, orgName, userName, ...rest } = data;

    return (
        <section className="space-y-20">
            <div className={styled.page__title}>
                <h1 className="text-2xl text-accent-darker font-semiMedium">User Details</h1>
                <div className={styled.button__wrapper}>
                    <Button variant="transparent-danger">Blacklist User</Button>
                    <Button variant="transparent-primary">Activate User</Button>
                </div>
            </div>
            <DetailsHeader
                fullName={`${profile.firstName} ${profile.lastName}`}
                accountBalance={rest.accountBalance}
                accountNumber={rest.accountNumber}
                img={profile.avatar}
                id={rest.id}
            />
            <div className={styled.user_info__wrapper}>
                <div className={styled.user__wrapper}>
                    <h3>Personal Information</h3>
                    <div className={styled.user__details}>
                        <UserInfoCard name="Organization" value={orgName} />
                        <UserInfoCard name="Username" value={userName} />
                        {Object.entries(profile).map((option) => {
                            if (option[0] === "avatar" || option[0] === "currency")
                                return null;
                            return (
                                <UserInfoCard
                                    key={option[0]}
                                    name={convertCamelCaseToString(option[0])}
                                    value={option[1].toString()}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={styled.user__wrapper}>
                    <h3>Education and Employment</h3>
                    <div className={styled.user__details}>
                        {Object.entries(education).map((option) => (
                            <UserInfoCard
                                key={option[0]}
                                name={convertCamelCaseToString(option[0])}
                                value={option[1].toString()}
                            />
                        ))}
                    </div>
                </div>
                <div className={styled.user__wrapper}>
                    <h3>Socials</h3>
                    <div className={styled.user__details}>
                        {Object.entries(socials).map((option) => (
                            <UserInfoCard
                                key={option[0]}
                                name={convertCamelCaseToString(option[0])}
                                value={option[1].toString()}
                            />
                        ))}
                    </div>
                </div>
                <div className={styled.user__wrapper}>
                    <h3>Guarantor</h3>
                    <div className={`${styled.user__details} ${styled.border__none}`}>
                        {Object.entries(guarantor).map((option) => (
                            <UserInfoCard
                                key={option[0]}
                                name={convertCamelCaseToString(option[0])}
                                value={option[1].toString()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserDetails;
