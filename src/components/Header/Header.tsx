import UserMenu from "@/components/UserMenu/UserMenu";
import Search from "@/components/Search/Search";
import Logo from "@/components/Logo/Logo";
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
