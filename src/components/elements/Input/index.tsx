import { ComponentProps } from "react";
import styles from "./Input.module.scss";

type Props = {
    error: string; // error string to show error message
    overrideStyles?: string; // override default styles
} & ComponentProps<"input">; // typescript inbuilt method to get additional prop types

const Input = ({ error, overrideStyles = "", placeholder, ...rest }: Props) => (
    <div className={`${styles.container} ${overrideStyles}`}>
        <input
            className={styles.input}
            placeholder={placeholder ?? "Enter Placeholder"}
            {...rest}
        />

        {error && <p className={styles.error}>{error}</p>}
    </div>
);

export default Input;
