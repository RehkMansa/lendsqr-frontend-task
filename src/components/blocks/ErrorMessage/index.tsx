import { useEffect } from "react";
import Alert from "../../../utils/alert";
import Button from "../../elements/Buttons";
import styled from "./Error.module.scss";

const ErrorMessage = ({ message }: { message: string }) => {
    useEffect(() => {
        Alert(message, "error");
    }, [message]);

    return (
        <section className={styled.wrapper}>
            <div className={styled.wrapper__content}>
                <h1>Something's wrong here.</h1>
                <p>
                    This is a server error, which means you've made a bad request or the
                    resource is not available. Try reloading the page to see if the error
                    continues
                </p>
                <Button onClick={() => window.location.reload()}>Reload Page</Button>
            </div>
        </section>
    );
};

export default ErrorMessage;
