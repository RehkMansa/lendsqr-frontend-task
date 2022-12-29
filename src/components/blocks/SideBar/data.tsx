import DecisionModelIcon from "../../../assets/icons/sidebar/customer/decision-models.svg";
import GuarantorsIcon from "../../../assets/icons/sidebar/customer/guarantors.svg";
import KarmaIcon from "../../../assets/icons/sidebar/customer/karma.svg";
import LoanRequestIcon from "../../../assets/icons/sidebar/customer/loan-requests.svg";
import LoansIcon from "../../../assets/icons/sidebar/customer/loans.svg";
import SavingsIcon from "../../../assets/icons/sidebar/customer/savings.svg";
import UsersIcon from "../../../assets/icons/sidebar/customer/users.svg";
import WhitelistIcon from "../../../assets/icons/sidebar/customer/whitelist.svg";
import AuditIcon from "../../../assets/icons/sidebar/settings/audit-logs.svg";
import FeePricingIcon from "../../../assets/icons/sidebar/settings/fees-and-pricing.svg";
import PreferencesIcon from "../../../assets/icons/sidebar/settings/preferences.svg";

export const sidebarItems = [
    {
        name: "customers",
        subItems: [
            {
                name: "Users",
                src: UsersIcon,
            },
            {
                name: "Guarantors",
                src: GuarantorsIcon,
            },
            {
                name: "Loans",
                src: LoansIcon,
            },
            {
                name: "Decision Models",
                src: DecisionModelIcon,
            },
            {
                name: "Savings",
                src: SavingsIcon,
            },
            {
                name: "Loan Requests",
                src: LoanRequestIcon,
            },
            {
                name: "Whitelist",
                src: WhitelistIcon,
            },
            {
                name: "Karma",
                src: KarmaIcon,
            },
        ],
    },
    {
        name: "settings",
        subItems: [
            {
                name: "Preferences",
                src: PreferencesIcon,
            },

            {
                name: "Fees and Pricing",
                src: FeePricingIcon,
            },
            {
                name: "Audit Logs",
                src: AuditIcon,
            },
        ],
    },
] as const; // to make the array immutable
