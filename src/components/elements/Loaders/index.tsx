import { ClipLoader } from "react-spinners";
import styles from "./Loader.module.scss";

export const SuspenseLoader = () => (
    <div className={styles.loader}>
        <ClipLoader color="#39CDCC" />
    </div>
);

export const FullScreenLoader = () => (
    <div className={styles.loader__fullscreen}>
        <ClipLoader color="#39CDCC" />
    </div>
);
