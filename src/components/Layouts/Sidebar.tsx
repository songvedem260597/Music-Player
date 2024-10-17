import Logo from "../../assets/images/Logo.png";
import "../../assets/scss/Sidebar.scss";
import { SidebarItem } from "../../config/SidebarItem";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <div className="ms-nav-bar" id="nav-bar">
      <div id="logo" className="ms-logo">
        <a href="#">
          <img className="logo-desktop" src={Logo} alt="Logo" width="150" />
        </a>
        <div id="close-id" className="close-logo ">
          <span className="material-icons-outlined">close</span>
        </div>
      </div>
      <div className="wrapper-nav-bar">
        <ul className="nav-bar-top">
          {SidebarItem[0].items.map((item, index) => (
            <Link
              className={isActive(item.to) ? "is-active" : ""}
              key={index}
              to={item.to}
            >
              <li>
                <span className={item.icon}>{item.title}</span>
                <p>{item.label}</p>
              </li>
            </Link>
          ))}
        </ul>
        <div className="hr-nav-bar"></div>
        <ul className="nav-bar-bottom">
          {SidebarItem[1].items.map((item, index) => (
            <Link
              className={isActive(item.to) ? "is-active" : ""}
              key={index}
              to={item.to}
            >
              <li>
                <span className={item.icon}>{item.title}</span>
                <p>{item.label}</p>
              </li>
            </Link>
          ))}
          <a href="#">
            <li className="login-mobile">
              <span className="material-icons-outlined ">login</span>
              <p>Đăng nhập</p>
            </li>
          </a>
        </ul>
        <div className="suggestion-login">
          <p>
            Tham gia ngay để khám phá những playlist dành riêng cho chính bạn.
          </p>
          <a href="#">
            <button id="join-now" className="btn btn-gradient">
              Tham Gia
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
