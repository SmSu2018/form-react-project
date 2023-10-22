import React from 'react';
import {  NavDropdown, Nav, Navbar } from "react-bootstrap";
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";

import "./Header.css";

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
                    { name: "Service A", subLink: [], href: "/" },
                    { name: "Service B", subLink: [], href: "/" }
                ]
            },
            { name: "Info", subLink: [] }
        ],
        href: "/"
    },
    {
        name: "Contact",
        subLink: [
            { name: "Call", subLink: [], href: "/" },
            { name: "Mail", subLink: [], href: "/" }
        ],
        href: "/"
    }
];
const profileMockData = {
    name: "Profile",
    subLink: [{ name: "LogOut", subLink: [], href: "/" }, { name: "View Profile", subLink: [], href: "/" }]
};
const Header = () => {

    const renderSubLinks = (subLinks) => {
        return subLinks.map((subNav, index) => {
            if (subNav?.subLink?.length) {
                return (
                    <DropdownSubmenu key={index} href={subNav?.href} title={subNav?.name}>
                        {renderSubLinks(subNav?.subLink)}
                    </DropdownSubmenu>
                );
            } else {
                return (
                    <NavDropdown.Item key={index} href={subNav?.href || ""}>
                        {subNav.name}
                    </NavDropdown.Item>
                );
            }
        });
    };

    const renderNavLinks = (navigationData) => {
        return navigationData.map((navItem, index) => {
            if (navItem.subLink?.length > 0) {
                return (
                    <NavDropdownMenu
                        key={index}
                        title={navItem.name}
                        href={navItem?.href || ""}
                        id="collasible-nav-dropdown"
                    >
                        {renderSubLinks(navItem.subLink)}
                        {/* <DropdownSubmenu href="#action/3.7" title="Services">
                    <NavDropdown.Item href="#action/8.1">
                      Service A
                    </NavDropdown.Item>
                    <DropdownSubmenu href="#action/3.7" title="New Dropdown">
                      <NavDropdown.Item href="#action/9.1">
                        Service B
                      </NavDropdown.Item>
                    </DropdownSubmenu>
                  </DropdownSubmenu>
                  <NavDropdown.Item href="#action/3.1">Info</NavDropdown.Item> */}
                    </NavDropdownMenu>
                   
                );
            } else {
                return (
                    <Nav.Link href={navItem.href || ""} key={index}>
                        {navItem.name}
                    </Nav.Link>
                );
            }
        });
    };

    const ProfileDropdown = (profileMockData) => {
        return (
            <NavDropdown title={"Profile"}>
                <NavDropdown.Item>View Profile</NavDropdown.Item>
                <NavDropdown.Item>Logout</NavDropdown.Item>
            </NavDropdown>
        );
    };
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            sticky="top"
            className="custom-navbar"
        >
            <Navbar.Brand href="#home">Company Logo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="m-auto">
                    {renderNavLinks(navigationData)}
                </Nav>
            </Navbar.Collapse>
            <ProfileDropdown {...profileMockData} />
        </Navbar>
    )
}

export default Header