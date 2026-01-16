import React,{useState} from 'react'
import { Link , useNavigate } from 'react-router'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
} from 'reactstrap';

export const Navbars = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    let navigate = useNavigate();

    return (
        <>
            <Navbar color='dark' full="true" expand="lg" dark="true" container={true}>
                <NavbarBrand href="/">Store</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="/admin">Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="https://github.com/reactstrap/reactstrap">
                                GitHub
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Blogs
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem tag={'a'} onClick={()=>navigate("/admin/blogs")}>List</DropdownItem>
                                <DropdownItem tag={'a'} onClick={()=>navigate("/admin/blogs/new")}>New</DropdownItem>                                
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </>
    )
}
