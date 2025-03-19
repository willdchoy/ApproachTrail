import { MdIosShare, MdModeComment } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import "./SocialIcons.css";

function SocialIcons() {
  return (
    <ul className="social-icons">
      <li>
        <MdIosShare />
      </li>
      <li>
        <MdModeComment />
      </li>
      <li>
        <IoMdHeart />
      </li>
    </ul>
  );
}

export default SocialIcons;
