import { FunctionComponent, useState, useEffect } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Navbar.css'



interface NavbarProps { }

const Navbar: FunctionComponent<NavbarProps> = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)


    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <span className ="navbar-name">JBSLST</span>  
                        <img src="./images/JSLOGO.png" alt="bug" height={50}/> 
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/jobs' className='nav-links' onClick={closeMobileMenu}>
                                Jobs
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/employers' className='nav-links' onClick={closeMobileMenu}>
                                Employers
                            </Link>
                        </li>
                        <li>
                            <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Log in
                            </Link>
                        </li>
                        <li>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
                {button && <Button buttonStyle='btn--outline' to='log-in'>LOG IN</Button>}
                {button && <Button buttonStyle='btn--outline' to='sign-up'>SIGN UP</Button>}
            </nav>
        </>
    );
};

export default Navbar;




