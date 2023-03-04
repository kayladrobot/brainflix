import "./Header.scss";
import "../../styles/partials/base/typography.scss";
import logo from "../../assets/logo/brainfix-logo.svg";
import profileImg from "../../assets/images/Mohan-muruge.jpg";
import uploadIcon from "../../assets/icons/upload.svg";
import searchIcon from "../../assets/icons/search.svg";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__grid">
        <Link to="/">
          <img className="header__logo" src={logo} alt="brainflix logo" />
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
        <Link to="/upload">
          <button className="btn btn__header">
            <img className="btn__uploadIcon" src={uploadIcon} alt="upload icon" />
            Upload
          </button>
        </Link>
      </div>
    </header>
  );
}
export default Header;
