import { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { Link } from "react-router-dom"
import Logo from 'components/Logo/Logo';
import { landing } from 'Routes';

const Header = ({ toggler, logoType, ...props }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);  

    const getActiveClassName = (url: string) => {
        if (`${window.location.pathname}${window.location.hash}` === url) {
            return "active"
        } else {
            return ''
        }
    }

    return (
        <Navbar id='header' fixed='top' color='white' expand="lg" className='pt-3 px-4'>
            {/* <Container fluid> */}
                <Link className="nav-brand" to="/">
                    <Logo />
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto mt-md-0 mt-3 align-items-center pr-3" navbar>
                        {landing.map((route) => (
                            <NavItem key={route.path}>
                                <Link className={`${getActiveClassName(`${route.path}`)} nav-link mx-3 my-md-0 my-2 text-darkBlue`} to={route.path}>{route.name}</Link>
                            </NavItem>
                        ))}
                    </Nav>
                </Collapse>
            {/* </Container> */}
        </Navbar>
    );
}

export default Header;