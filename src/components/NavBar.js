import { Link, NavLink } from 'react-router-dom';

function NavBar() {

    return (
        <nav className='Navbar'>
            <ul>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => isActive ? 'selected' : ''}
                    >
                    Home
                    </NavLink> | 
                <NavLink
                    to='/apartments'
                    className={({ isActive }) => isActive ? 'selected' : ''}
                    >
                    List of Apartments
                    </NavLink>| 
                <NavLink
                    to='/apartments/create'
                    className={({ isActive }) => isActive ? 'selected' : ''}
                    >
                    Create a new Apartment
                    </NavLink>
            </ul>
        </nav>
    );
}

export default NavBar;