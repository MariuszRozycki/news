import React from "react";

import Logo from "./Logo";
import NavLink from "./NavLink";

function Header() {
  return (
    <div>
      <Logo />
      <div>
        <NavLink to={"/"} label="link 1" />
        <NavLink to={"/"} label="link 2" />
        <NavLink to={"/"} label="link 3" />
      </div>
    </div>
  )
};

export default Header;