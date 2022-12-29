/* eslint-disable react/button-has-type */
import React, { ComponentProps } from "react";
import styled from "./Button.module.scss";

type Props = {
    children: React.ReactNode;
    variant?: "primary" | "transparent" | "transparent-danger" | "transparent-primary";
    overrideClass?: string;
} & ComponentProps<"button">;

const Button = ({
    children,
    type,
    variant = "primary",
    overrideClass,
    ...otherProps
}: Props) => (
    <button
        className={`${styled.button} ${styled[variant]} ${overrideClass}`}
        type={type ?? "button"}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;
