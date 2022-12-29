import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.scss";

const SuspenseLoader = () => (
    <div className={styles.loader}>
        <ClipLoader color="#39CDCC" />
    </div>
);

export default SuspenseLoader;
