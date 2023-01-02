import Rating from "../../../components/elements/Rating";
import { randomInt } from "../../../utils/randomInt";
import styled from "./UserDetails.module.scss";

const options = [
    "General Details",
    "Documents",
    "Bank Details",
    "Loans",
    "Savings",
    "App and System",
];

const DetailsHeader = () => (
    <div className={styled.header}>
        <div className={styled.header__details}>
            <div className={styled.avatar}>
                <img
                    src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg"
                    alt=""
                />
                <div className={`${styled.avatar__details} space-y-2`}>
                    <h4>Grace Effiom</h4>
                    <p className="text-sm">LSQFf587g90</p>
                    <div className={styled.mobile__info_tab}>
                        <div className={styled.mobile__tier_details}>
                            <p className="text-sm">User's Tier:</p>
                            <div className={styled.mobile__only}>
                                <Rating size={16} rating={randomInt(0, 5)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styled.tier_details} space-y-2`}>
                <p className="text-sm">User's Tier</p>
                <Rating rating={randomInt(0, 5)} />
            </div>
            <div className={`${styled.amount_tab} space-y-3`}>
                <h4>₦200,000.00</h4>
                <p className="text-xs">9912345678/Providus Bank</p>
                <div className={styled.mobile__tier_details}>
                    <Rating size={16} rating={randomInt(0, 5)} />
                </div>
            </div>
        </div>
        <div className={styled.page__tabs}>
            {options.map((name) => (
                <div key={name} className={styled.tab}>
                    {name}
                </div>
            ))}
        </div>
    </div>
);

export default DetailsHeader;
