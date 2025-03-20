import "./UserMenu.css";
import profileImage from "@/assets/profile.png";

function UserMenu() {
  return (
    <div className="user-menu header-grid-user">
      <a href="#">
        <img src={profileImage} />
      </a>
    </div>
  );
}

export default UserMenu;
