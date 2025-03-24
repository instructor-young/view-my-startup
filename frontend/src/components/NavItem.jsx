import React from "react";
import { Link } from "react-router";

function NavItem({ to, label }) {
  return (
    <Link to={to} className="text-gray-200 text-[15px] font-semibold">
      {label}
    </Link>
  );
}

export default NavItem;
