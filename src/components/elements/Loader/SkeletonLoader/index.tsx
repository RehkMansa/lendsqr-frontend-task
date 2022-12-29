type Props = {
    children: React.ReactNode;
};

const SkeletonLoader = ({ children }: Props) => <div>{children}</div>;

export default SkeletonLoader;
