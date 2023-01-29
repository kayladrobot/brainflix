import "./Header.scss";
import logo from "../../assets/logo/brainfix-logo.svg"
import profileImg from "../../assets/images/Mohan-muruge.jpg"
import uploadIcon from "../../assets/icons/upload.svg"

function Header() {
    return (
        <header>
            <img 
                className="header__logo"
                src={logo}
                alt="brainflix logo" 
            />
            <form className="header__input search__container">
                <input type="text" placeholder="Search" />
                <i className="search__icon" aria-hidden="true"></i>
            </form>
            <img 
                className="header__profileImg"
                src={profileImg}
                alt="user profile"
                 />
            <button className="header__btn btn">
                <img 
                    className="upload__icon"
                    src={uploadIcon}
                    alt="upload icon"
                />
                Upload</button>
        </header>
    )
}
export default Header;