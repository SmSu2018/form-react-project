import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

const navigationData = [
  {
    name: "Home",
    subLink: [],
    href: "/"
  },
  {
    name: "About",
    subLink: [
      {
        name: "Services",
        subLink: [
          { name: "Service A", subLink: [], href: "#!" },
          { name: "Service B", subLink: [], href: "#!!" },
          { name: "Service C", subLink: [], href: "#!!!" }
        ]
      },
      { name: "Info", subLink: [] }
    ],
    href: "#"
  },
  {
    name: "Contact",
    subLink: [
      { name: "Call", subLink: [], href: "#" },
      { name: "Mail", subLink: [], href: "#" }
    ],
    href: "#"
  }
];

const NavItem = ({ item }) => {
  if (item.subLink.length === 0) {
    return (
      <Nav.Link key={item.name} href={item.href} style={{ color: "white" }}>
        {item.name}
      </Nav.Link>
    );
  } else {
    return (
      <NavDropdown
        title={item.name}
        className="dropdown root-dropdown"
        key={item.name}
      >
        {item.subLink.map((subNavItem, subIndex) => (
          <SubNavItem key={subIndex} item={subNavItem} />
        ))}
      </NavDropdown>
    );
  }
};

const SubNavItem = ({ item }) => {
  if (item.subLink.length === 0) {
    return (
      <Nav.Link key={item.name} href={item.href} style={{ marginLeft: "10px" }}>
        {item.name}
      </Nav.Link>
    );
  } else {
    return (
      <NavDropdown
        title={item.name}
        className="dropend nested-dropdown"
        key={item.name}
      >
        {item.subLink.map((subSubNavItem, subSubIndex) => (
          <NavDropdown.Item key={subSubIndex} href={subSubNavItem.href}>
            {subSubNavItem.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }
};

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar-bg">
      <Container>
        <Navbar.Brand href="#home" className="navbar-default">
          Company Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <div style={{ display: "flex" }}>
                {navigationData.map((navItem, index) => (
                  <NavItem key={index} item={navItem} />
                ))}
              </div>
              <div>
                <NavDropdown title="Profile" className="dropdown root-dropdown">
                  <NavDropdown.Item
                    className="dropdown-item"
                    href="#action/3.1"
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
