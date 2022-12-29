import Illustration from "../../assets/login-illustration.svg";
import { DefaultInput, PasswordInput } from "../../components/elements/Input";
import styled from "./Login.module.scss";

const Login = () => (
    <main className={styled.main}>
        <img src={Illustration} alt="" />
        <section className={styled.boxed}>
            <div className="space-y-20">
                <div className="space-y-4">
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                </div>
                <form className="space-y-12">
                    <DefaultInput error="" />
                    <PasswordInput error="" />
                    <p className="text-accent text-xs font-bold capitalize">
                        Forgot password?
                    </p>
                </form>
            </div>
        </section>
    </main>
);

export default Login;
