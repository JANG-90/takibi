import "./Header.css"; // 파일 경로에 맞게 수정
import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png"; // 꼭 이 경로여야 함
/* 상단 헤더 */

const Header = () => {
  return (
    <header className="Header">
      <div className="Nav">
        <div className="Logo">
          <Link to="/Home">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </div>
        <nav>
          <Link to="/Home">Home</Link> | <Link to="/Magazine">Magazine</Link> | <Link to="/Gear">Gear</Link> | <Link to="/CampSite">CampSite</Link> | <Link to="/CampFood">CampFood</Link> |
          <Link to="/Community">Community</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
