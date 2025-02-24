import "./UserMenu.css";

function UserMenu() {
  const profileImageUrl =
    "https://avatars.githubusercontent.com/u/567597?v=4&size=64";

  return (
    <div className="user-menu header-grid-user">
      <a href="#">
        <img src={profileImageUrl} />
      </a>
    </div>
  );
}

export default UserMenu;
