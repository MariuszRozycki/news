import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";
import NavLink from "./NavLink";

function Header() {
  return (
    <div>
      <Logo />
      <Menu>
        <NavLink to={"/"} label="link 1" />
        <NavLink to={"/"} label="link 2" />
        <NavLink to={"/"} label="link 3" />
      </Menu>
    </div>
  );
}

export default Header;