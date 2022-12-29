import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Input from "../index";

describe("Input component", () => {
    it("renders an input element with the correct placeholder text", () => {
        const { getByPlaceholderText } = render(
            <Input error="No username" placeholder="Enter value" />
        );
        const input = getByPlaceholderText("Enter value");
        expect(input).toBeInTheDocument();
    });

    it("displays an error message if the error prop is set", () => {
        const { getByText } = render(<Input error="Invalid value" />);
        const errorMessage = getByText("Invalid value");
        expect(errorMessage).toBeInTheDocument();
    });

    it("updates the value of the input when the user types", () => {
        const { getByPlaceholderText } = render(
            <Input error="No username" placeholder="Enter value" />
        );
        const input = getByPlaceholderText("Enter value") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "new value" } });
        expect(input.value).toBe("new value");
    });

    /* 
    it("fires an event when the user clicks a button", () => {
        const handleClick = jest.fn();
        const { getByText } = render(<Input error="No username" onClick={handleClick} />);
        const button = getByText(text => text.includes("Click me"));
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    }); */
});
