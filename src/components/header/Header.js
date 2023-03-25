import { Link } from "react-router-dom";
import logo from "../../assets/logo/brainfix-logo.svg";
import profileImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";
import "./Header.scss";
import "../../styles/partials/base/typography.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__grid">
        <Link to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8" className="header__logo">
          <img src={logo} alt="brainflix logo" />
        </Link>
        <form className="header__form">
          <input type="text" className="header__input" placeholder="Search" />
          <img
            className="header__searchIcon"
            src={searchIcon}
            alt="search icon"
          />
        </form>
        <div className="header__imgContainer">
          <img
            className="header__profileImg"
            src={profileImg}
            alt="user profile"
          />
        </div>
        <Link to="/upload" className="btn__headerContainer">
          <button className="btn btn__header">
            <img
              className="btn__uploadIcon"
              src={uploadIcon}
              alt="upload icon"
            />
            Upload
          </button>
        </Link>
      </div>
    </header>
  );
}
export default Header;
