import { Link } from "react-router-dom";
import styled from "./NotFound.module.scss";
import Button from "../../components/elements/Buttons";

const NotFound = () => (
    <section className={styled.wrapper}>
        <div className="space-y-5">
            <h4>404</h4>
            <h1>We couldn't find this page</h1>
            <p>
                The page you're looking for is not available. Why don't you go back home
                and try again
            </p>
            <Link to="/users">
                <Button>Go to home</Button>
            </Link>
        </div>
    </section>
);

export default NotFound;
