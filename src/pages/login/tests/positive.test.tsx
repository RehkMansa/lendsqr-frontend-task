import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../index";
import store from "../../../utils/store";

test("typing in the email input updates the form data", () => {
    const { getByPlaceholderText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email");

    fireEvent.change(emailInput, { target: { value: "user@example.com" } });

    expect(emailInput).toHaveValue("user@example.com");
});

test("submitting the login form saves the form data to local storage", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const submitButton = getByText("LOG IN");

    fireEvent.change(emailInput, { target: { value: "user@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
        expect(store.get("user")).toEqual({
            email: "user@example.com",
            password: "password",
        });
    });
});
