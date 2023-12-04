import { NavLink } from "react-router-dom";
import './Header.scss'

const Header = () => {
    return (  
        <header>
            <nav>
                <NavLink to='/'>BEST NEWS</NavLink>
                <NavLink to='/'>HOME</NavLink>
            </nav>
        </header>
    );
}
 
export default Header;