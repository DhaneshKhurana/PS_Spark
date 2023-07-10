import { Nav, Navbar } from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";

export const PSNavMenu = ({ active, onSelect, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Brand href="#">PS Spark</Navbar.Brand>
      <Nav onSelect={onSelect} activeKey={active}>
        <Nav.Item eventKey="home" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item eventKey="tags">Tags</Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item eventKey="company">Company</Nav.Item>
          <Nav.Item eventKey="team">Team</Nav.Item>
          <Nav.Item eventKey="contact">Contact</Nav.Item>
        </Nav.Menu>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
      </Nav>
    </Navbar>
  );
};
