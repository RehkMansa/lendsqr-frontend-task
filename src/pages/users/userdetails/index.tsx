import { UserResponseType } from "../../../types/userResponse.type";
import { convertCamelCaseToString } from "../../../utils/formatWord";
import DetailsHeader from "./DetailsHeader";
import styled from "./UserDetails.module.scss";

const userType = {
    createdAt: "2072-12-27T03:44:22.522Z",
    orgName: "labore-dolor-et",
    userName: "Wilburn.Rice",
    email: "Maverick.Hyatt83@gmail.com",
    phoneNumber: "(553) 208-0727 x31321",
    lastActiveDate: "2099-02-28T23:17:40.013Z",
    profile: {
        firstName: "Darian",
        lastName: "Rolfson",
        phoneNumber: "494-278-0946",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg",
        gender: "Male",
        bvn: "815809412",
        address: "Gusikowski Locks",
        currency: "NGN",
    },
    guarantor: {
        firstName: "Celine",
        lastName: "Monahan",
        phoneNumber: "1-482-227-3654 x71086",
        gender: "Male",
        address: "O'Hara Centers",
    },
    accountBalance: "496.00",
    accountNumber: "GWQUSEH1",
    socials: {
        facebook: "@lendsqr",
        instagram: "@lendsqr",
        twitter: "@lendsqr",
    },
    education: {
        level: "Bsc",
        employmentStatus: "Employed",
        sector: "FinTech",
        duration: "2 Years",
        officeEmail: "Edna4@yahoo.com",
        monthlyIncome: ["128.57", "118.07"],
        loanRepayment: "122.47",
    },
    id: "1",
};

const UserInfoCard = ({ name, value }: { name: string; value: string }) => (
    <div className="space-y-2">
        <h5 className="text-xs uppercase">{name}</h5>
        <p className="text-base font-semiMedium">{value}</p>
    </div>
);

const UserDetails = () => {
    const { profile, socials, education, guarantor, orgName, userName } =
        userType as UserResponseType;

    return (
        <section className="space-y-20">
            <h1 className="text-2xl text-accent-darker font-semiMedium">Users</h1>
            <DetailsHeader />
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
