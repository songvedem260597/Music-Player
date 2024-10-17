import { Link } from "react-router-dom";
import '../../assets/scss/Header.scss';
const Header = () => {
  return (
    <div id="header" className="ms-wrapper-header">
      <div className="ms-header">
        <div id="search" className="search-container">
          <button className="ms-btn-search">
            <span className="material-icons-outlined">search</span>
          </button>
          <div className="input-wrapper">
            <input
              type="text"
              id="input-search"
              className="input-search form-control"
              placeholder="Nhập tên bài hát, nghệ sĩ…"
            />
          </div>
          <div className="search-result" id="search-result"></div>
        </div>
        <div className="ms-header-control">
          <div className="wrapper-header-control">
            <Link
              id="signUpHeader"
              className="btn sign-up-trigger"
              to="/login"
              data-target="#login"
              data-toggle="modal"
            >
              Đăng Ký
            </Link>
            <Link
              id="signInHeader"
              to="/register"
              className="btn login-trigger"
              data-toggle="modal"
            >
              Đăng Nhập
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
