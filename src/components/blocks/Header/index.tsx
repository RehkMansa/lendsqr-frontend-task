import styled from "./Header.module.scss";
import Logo from "../../../assets/logo.svg";

const Header = () => (
    <header className={styled.header}>
        <nav className={styled.nav}>
            <img src={Logo} alt="Lend Sqr" />
            <h3>header</h3>
        </nav>
    </header>
);

export default Header;
