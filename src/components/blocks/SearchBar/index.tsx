import { BsSearch } from "react-icons/bs";
import Button from "../../elements/Buttons";
import styled from "./SearchBar.module.scss";

const SearchBar = () => (
    <form className={styled.form}>
        <input
            id="searchInput"
            aria-label="Search for anything"
            placeholder="Search for anything"
        />
        <Button overrideClass={styled.button} aria-label="search">
            <BsSearch />
        </Button>
    </form>
);

export default SearchBar;
