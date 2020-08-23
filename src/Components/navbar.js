import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    // console.log(props);
    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000);
    // const prop = props;
    // console.log(prop.name);
    // console.log(prop);

    return (
        <div>
            <nav className="nav-wrapper red darken-3">
                <div className="container">
                    <Link to="/" className="brand-logo">Poke time's</Link>
                    <ul className="right">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/posts">Posts</Link></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default withRouter(Navbar)
