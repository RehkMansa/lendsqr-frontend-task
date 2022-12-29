import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PasswordInput } from "../index";

describe("PasswordInput", () => {
    it('should toggle the type of the input between "text" and "password" when the show/hide button is clicked', () => {
        const { getByPlaceholderText, getByText } = render(
            <PasswordInput error="" placeholder="Enter password" />
        );
        const input = getByPlaceholderText("Enter password");
        const button = getByText("show");

        expect(input).toHaveAttribute("type", "password");
        fireEvent.click(button);
        expect(input).toHaveAttribute("type", "text");
        fireEvent.click(button);
        expect(input).toHaveAttribute("type", "password");
    });

    it("should render the error message if provided", () => {
        const { getByText } = render(<PasswordInput error="Invalid password" />);
        expect(getByText("Invalid password")).toBeInTheDocument();
    });
});
