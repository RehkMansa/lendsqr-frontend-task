import { BsBell } from "react-icons/bs";
import styled from "./Header.module.scss";
import Logo from "../../../assets/logo.svg";
import SearchBar from "../SearchBar";
import Avatar from "../../../assets/avatar.png";

const Header = () => (
    <header className={styled.header}>
        <nav className={styled.nav}>
            <img src={Logo} alt="Lend Sqr" />
            <div className={styled.header__right}>
                <div className={styled.header__search}>
                    <SearchBar />
                </div>
                <div className={styled.header__content}>
                    <a href="#">Docs</a>
                    <BsBell />

                    <div className={styled.avatar}>
                        <img src={Avatar} alt="" />
                        <p>Adedeji</p>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
