import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Nav, NavItem, NavLink, Navbar, NavbarToggler, Collapse } from 'reactstrap';
import './Home.css';

const NavBar = () => {
    const [activeTab, setActiveTab] = useState('home');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/':
                setActiveTab('home');
                break;
            case '/about':
                setActiveTab('about');
                break;
            case '/projects':
                setActiveTab('projects');
                break;
            case '/careers':
                setActiveTab('careers');
                break;
            case '/contact':
                setActiveTab('contact');
                break;
            default:
                setActiveTab('home');
                break;
        }
    }, [location.pathname]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        switch (tab) {
            case 'home':
                navigate('/');
                break;
            case 'about':
                navigate('/about');
                break;
            case 'projects':
                navigate('/projects');
                break;
            case 'careers':
                navigate('/careers');
                break;
            case 'contact':
                navigate('/contact');
                break;
            default:
                navigate('/');
                break;
        }
    };

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md" className='Nav-container'>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="navbar-bb" navbar>
                    <NavItem>
                        <NavLink
                            active={activeTab === 'home'}
                            onClick={() => handleTabChange('home')}
                        >
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={activeTab === 'about'}
                            onClick={() => handleTabChange('about')}
                        >
                            About Us
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={activeTab === 'projects'}
                            onClick={() => handleTabChange('projects')}
                        >
                            Research
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={activeTab === 'careers'}
                            onClick={() => handleTabChange('careers')}
                        >
                            Careers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            active={activeTab === 'contact'}
                            onClick={() => handleTabChange('contact')}
                        >
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default NavBar;
