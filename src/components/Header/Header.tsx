import UserMenu from "../UserMenu/UserMenu";
import Search from "../Search/Search";
import Logo from "../Logo/Logo";
import "./Header.css";

function Header() {
  return (
    <header className="main-head">
      <div className="wrapper">
        <Logo />
        <Search />
        <UserMenu />
      </div>
    </header>
  );
}

export default Header;
