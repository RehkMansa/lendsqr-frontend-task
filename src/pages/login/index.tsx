import Illustration from "../../assets/login-illustration.svg";
import { DefaultInput, PasswordInput } from "../../components/elements/Input";

const Login = () => (
    <main>
        <img src={Illustration} alt="" />
        <section>
            <form>
                <div>
                    <h1>Welcome</h1>
                    <p>Enter details to login.</p>
                </div>

                <DefaultInput error="No username" />
                <PasswordInput error="" />
            </form>
        </section>
    </main>
);

export default Login;
