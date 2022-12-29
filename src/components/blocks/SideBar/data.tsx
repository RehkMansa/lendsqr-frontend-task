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
import FeeAndChargeIcon from "../../../assets/icons/sidebar/businesses/fees-and-charges.svg";
import OrgIcon from "../../../assets/icons/sidebar/businesses/organization.svg";
import ReportsIcon from "../../../assets/icons/sidebar/businesses/reports.svg";
import SavingsProductIcon from "../../../assets/icons/sidebar/businesses/savings-products.svg";
import SavingsActIcon from "../../../assets/icons/sidebar/businesses/service-account.svg";
import ServicesIcon from "../../../assets/icons/sidebar/businesses/services.svg";
import SettlementsIcon from "../../../assets/icons/sidebar/businesses/settlements.svg";
import TxnsIcon from "../../../assets/icons/sidebar/businesses/transactions.svg";

export const sidebarItems = [
    {
        name: "Customers",
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
        name: "Businesses",
        subItems: [
            {
                name: "Organization",
                src: OrgIcon,
            },
            {
                name: "Loan Products",
                src: LoanRequestIcon,
            },
            {
                name: "Savings Products",
                src: SavingsProductIcon,
            },
            {
                name: "Fees and Charges",
                src: FeeAndChargeIcon,
            },
            {
                name: "Transactions",
                src: TxnsIcon,
            },
            {
                name: "Services",
                src: ServicesIcon,
            },
            {
                name: "Service Account",
                src: SavingsActIcon,
            },
            {
                name: "Settlements",
                src: SettlementsIcon,
            },
            {
                name: "Reports",
                src: ReportsIcon,
            },
        ],
    },
    {
        name: "Settings",
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
