import { Link } from "react-router-dom";
function NavBar() {
    return ( 
<div>
    <navbar>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/rick&morty'}>Rick & Morty</Link>
            </li>
        </ul>
    </navbar>
</div>
     );
}

export default NavBar;