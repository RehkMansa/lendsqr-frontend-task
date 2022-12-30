import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { DefaultInput } from "../index";

describe("Input component", () => {
    it("renders an input element with the correct placeholder text", () => {
        const { getByPlaceholderText } = render(
            <DefaultInput error="No username" placeholder="Enter value" />
        );
        const input = getByPlaceholderText("Enter value");
        expect(input).toBeInTheDocument();
    });

    it("displays an error message if the error prop is set", () => {
        const { getByText } = render(
            <DefaultInput placeholder="" error="Invalid value" />
        );
        const errorMessage = getByText("Invalid value");
        expect(errorMessage).toBeInTheDocument();
    });

    it("updates the value of the input when the user types", () => {
        const { getByPlaceholderText } = render(
            <DefaultInput error="No username" placeholder="Enter value" />
        );
        const input = getByPlaceholderText("Enter value") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "new value" } });
        expect(input.value).toBe("new value");
    });
});
