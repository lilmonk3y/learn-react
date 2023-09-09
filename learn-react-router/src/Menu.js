import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav>
            <ul>
                {routes.map(({to, label}) => (
                    <li>
                        <NavLink
                            to={to}
                            style={({isActive}) => ({color: isActive ? "blue" : "red"})}
                        >
                            {label}
                        </NavLink>
                    </li>))}
            </ul>
        </nav>
    );
}

const routes = [{to: "/", label: "Home"}, {to: "/blog", label: "Blog"}];

export { Menu };