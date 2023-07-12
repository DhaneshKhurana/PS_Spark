import React, { useState } from "react";
import { NavMenu } from "./NavMenu";

const Header = ({ onThemeChange }) => {
  const [active, setActive] = useState("home");

  function navItemChanged(navItem) {
    console.log("Header:: NavItem received", navItem);
    if (navItem) setActive(navItem);
  }

  return (
    <>
      <NavMenu
        appearance="inverse"
        active={active}
        onSelect={navItemChanged}
        onThemeChange={onThemeChange}
      />
    </>
  );
};

export default Header;
