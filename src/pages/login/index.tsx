import React, { useState } from "react";
import { validateAll } from "indicative/validator";
import Illustration from "../../assets/login-illustration.svg";
import Button from "../../components/elements/Buttons";
import { DefaultInput, PasswordInput } from "../../components/elements/Input";
import styled from "./Login.module.scss";
import {
    FormSubmit,
    InputOnchange,
    KeyOfType,
    ObjectType,
} from "../../types/generictype";
import store from "../../utils/store";
import { getValidationErrors } from "../../utils/getValidationErrors";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState<ObjectType<string>>({});

    const handleChange = (e: InputOnchange, name: KeyOfType<typeof formData>) => {
        const { value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: FormSubmit) => {
        e.preventDefault();

        const rules = {
            email: "required|email",
            password: "required|min:6",
        };

        const message = {
            "email.required": "Email is blank",
            "email.email": "Please enter a valid email",
            "password.required": "Password is blank",
            "password.min": "Password is too short",
        };

        validateAll(formData, rules, message)
            .then(() => store.save("user", formData))
            .catch((err) => {
                const formattedErrors = getValidationErrors(err);

                setErrors(formattedErrors);
            });
    };

    return (
        <main className={styled.main}>
            <img src={Illustration} alt="" />
            <section className={styled.boxed}>
                <div className="space-y-20">
                    <div className="space-y-4">
                        <h1>Welcome!</h1>
                        <p className="text-lg">Enter details to login.</p>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <DefaultInput
                            onChange={(e) => handleChange(e, "email")}
                            placeholder="Email"
                            error={errors.email}
                            name="email"
                            type="email"
                        />
                        <PasswordInput
                            onChange={(e) => handleChange(e, "password")}
                            placeholder="Password"
                            name="password"
                            error={errors.password}
                        />
                        <p className="text-accent text-xs font-bold capitalize">
                            Forgot password?
                        </p>
                        <div className={styled.buttonWrapper}>
                            <Button type="submit">LOG IN</Button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Login;
