import { Link } from "react-router-dom";
import "../../assets/scss/Header.scss";

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  return (
    <div id="header" className={`ms-wrapper-header ${scrolled ? "scrolled" : ""}`}>
      <div className="ms-header">
        <div id="search" className={`search-container ${scrolled ? "scrolled" : ""}`}>
          <button className="ms-btn-search">
            <span className="material-icons-outlined">search</span>
          </button>
          <div className="input-wrapper">
            <input
              type="text"
              id="input-search"
              className={`input-search form-control ${scrolled ? "scrolled" : ""}`}
              placeholder="Nhập tên bài hát, nghệ sĩ…"
            />
          </div>
          <div id="search-result" className={`search-result ${scrolled ? "scrolled" : ""}`}></div>
        </div>
        <div className="ms-header-control">
          <div className="wrapper-header-control">
            <Link id="signUpHeader" className="btn sign-up-trigger" to="/login">
              Đăng Ký
            </Link>
            <Link id="signInHeader" to="/register" className="btn login-trigger">
              Đăng Nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
