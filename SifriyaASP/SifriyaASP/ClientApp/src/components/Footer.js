import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class Footer extends Component {
    static displayName = Footer.name;

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="mb-3">
                <Navbar light>
                    <Container>
                        <NavbarBrand>Footer</NavbarBrand>
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={true} navbar>

                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/">About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-dark" to="/books">Books</NavLink>
                                </NavItem>
                            </ul>
                        </Collapse>

                    </Container>
                </Navbar>
            </div>
        );
    }
}
