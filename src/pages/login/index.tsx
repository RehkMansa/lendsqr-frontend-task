import Illustration from "../../assets/login-illustration.svg";
import Input from "../../components/elements/Input";

const Login = () => (
    <main>
        <img src={Illustration} alt="" />
        <section>
            <form>
                <div>
                    <h1>Welcome</h1>
                    <p>Enter details to login.</p>
                </div>

                <Input error="No username" />
            </form>
        </section>
    </main>
);

export default Login;
