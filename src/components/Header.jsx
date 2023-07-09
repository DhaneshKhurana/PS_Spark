import React, { useState } from "react";
import { PSNavMenu } from "./Nav/NavItems";

const Header = () => {
  const [active, setActive] = useState("home");

  function navItemChanged(navItem) {
    console.log("Header:: NavItem received", navItem);
    if (navItem) setActive(navItem);
  }

  return (
    <>
      <PSNavMenu
        appearance="inverse"
        active={active}
        onSelect={navItemChanged}
      />
    </>
  );
};

export default Header;
