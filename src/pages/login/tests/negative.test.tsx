import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import Login from "../index";

test("submitting the login form with an invalid email displays an error message", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);
    const emailInput = getByPlaceholderText("Email");
    const submitButton = getByText("LOG IN");

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.submit(submitButton);

    await waitFor(() => {
        expect(getByText("Please enter a valid email")).toBeInTheDocument();
    });
});

test("submitting the form with short password creates an error", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const password = getByPlaceholderText("Password");
    const submitButton = getByText("LOG IN");

    fireEvent.change(password, { target: { value: "short" } });
    fireEvent.submit(submitButton);
    await waitFor(() => {
        expect(getByText("Password is too short")).toBeInTheDocument();
    });
});
