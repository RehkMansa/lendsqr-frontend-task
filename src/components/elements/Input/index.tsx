import { ComponentProps, useState } from "react";
import styles from "./Input.module.scss";

type Props = {
    error: string; // error string to show error message
    overrideStyles?: string; // override default styles
} & ComponentProps<"input">; // typescript inbuilt method to get additional prop types

export const DefaultInput = ({
    error,
    overrideStyles = "",
    placeholder,
    ...rest
}: Props) => (
    <div className={`${styles.container} ${overrideStyles}`}>
        <input
            className={styles.input}
            placeholder={placeholder ?? "Enter Placeholder"}
            {...rest}
        />

        {error && <p className={styles.error}>{error}</p>}
    </div>
);

export const PasswordInput = ({
    error,
    overrideStyles = "",
    placeholder,
    ...rest
}: Props) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={`${styles.container} ${overrideStyles}`}>
            <div className={styles.password}>
                <input
                    className={styles.input}
                    placeholder={placeholder ?? "Enter Placeholder"}
                    {...rest}
                    type={showPassword ? "text" : "password"}
                />
                <button type="button" onClick={() => setShowPassword(c => !c)}>
                    {showPassword ? "hide" : "show"}
                </button>
            </div>

            {error && <p className={styles.error}>{error}</p>}
        </div>
    );
};
