import { Nav, Navbar } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import { forwardRef } from "react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

export const NavMenu = ({ active, onSelect, onThemeChange, ...props }) => {
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
      </Nav>
      <Nav pullRight>
        <Nav.Item>
          <ThemeToggle onThemeChange={onThemeChange} />
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
