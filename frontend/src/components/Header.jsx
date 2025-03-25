import { Link } from "react-router";
import LogoLarge from "../assets/img/logo-lg.png";
import NavItem from "./NavItem";

function Header() {
  return (
    <header className="border-b border-black-100">
      <div className="max-w-1200 mx-auto flex items-center h-[60px]">
        <Link to={"/"}>
          <img src={LogoLarge} className="h-10" alt="view my startup" />
        </Link>

        <nav className="ml-10 ">
          <ul className="flex items-center gap-x-8">
            <li>
              <NavItem to="/compare/my-startups" label="나의 기업 비교" />
            </li>
            <li>
              <NavItem to="/compare/dashboard" label="비교 현황" />
            </li>
            <li>
              <NavItem to="/dashboard" label="투자 현황" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
