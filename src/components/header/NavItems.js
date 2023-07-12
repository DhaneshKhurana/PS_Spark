import { Nav, Navbar } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

export const PSNavMenu = ({ active, onSelect, ...props }) => {
  const NavLink = forwardRef(({ href, children, ...rest }, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  return (
    <Navbar {...props}>
      <Navbar.Brand href="/">PS Spark</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={active}>
        <Nav.Item eventKey="home" icon={<HomeIcon />} href="/" as={NavLink}>
          Home
        </Nav.Item>
        <Nav.Item eventKey="posts" as={NavLink} href="/posts">
          Posts
        </Nav.Item>
        <Nav.Item eventKey="about" as={NavLink}>
          About Us
        </Nav.Item>
        <Nav.Item eventKey="team" as={NavLink}>
          Team
        </Nav.Item>
        <Nav.Item eventKey="contact" as={NavLink}>
          Contact Us
        </Nav.Item>

        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};
