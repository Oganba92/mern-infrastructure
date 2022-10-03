import {Link} from 'react-router-dom';

export default function NavBar({user}) {
    return (
        <nav>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp; <Link to={}>Logout</Link>
        </nav>
    )
}
