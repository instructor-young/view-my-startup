import { Link, useMatch } from "react-router";

function NavItem({ to, label }) {
  const isActive = !!useMatch(to);

  return (
    <Link
      to={to}
      data-is-active={isActive}
      className="text-gray-200 text-[15px] font-semibold data-[is-active=true]:text-white transition"
    >
      {label}
    </Link>
  );
}

export default NavItem;
