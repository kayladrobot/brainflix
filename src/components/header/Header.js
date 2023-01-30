import "./Header.scss";
import "../../styles/partials/base/typography.scss"
import logo from "../../assets/logo/brainfix-logo.svg"
import profileImg from "../../assets/images/Mohan-muruge.jpg"
import uploadIcon from "../../assets/icons/upload.svg"
import searchIcon from "../../assets/icons/search.svg"

function Header() {
    return (
        <header className="header">
            <img 
                className="header__logo"
                src={logo}
                alt="brainflix logo" 
            />
            <div className="header__searchWrapper">
                <form>
                    <input type="text" className="header__input" placeholder="Search" />
                    <img 
                        className="header__searchIcon" 
                        src={searchIcon} 
                        alt="search icon"
                    />
                </form>
                <img 
                    className="header__profileImg"
                    src={profileImg}
                    alt="user profile"
                    />
            </div>
            <button className="btn btn__header">
                <img 
                    className="btn__uploadIcon"
                    src={uploadIcon}
                    alt="upload icon"
                />
                Upload
            </button>
        </header>
    )
}
export default Header;