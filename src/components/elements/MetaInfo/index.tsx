import styled from "./MetaInfo.module.scss";

type Props = {
    name: string;
    icon: string;
    value: string;
};

const MetaInfo = ({ name, icon, value }: Props) => (
    <div className={`space-y-6 ${styled.wrapper}`}>
        <img src={icon} alt={name} />
        <h4 className="font-semiMedium text-sm">{name}</h4>
        <p className="font-medium text-2xl">{value}</p>
    </div>
);

export default MetaInfo;
