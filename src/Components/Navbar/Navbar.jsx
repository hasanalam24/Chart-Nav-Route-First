import NavLink from "../NavLink/NavLink";
import { CgMenuGridR } from "react-icons/cg";

const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/products', name: 'Our Products' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/blog', name: 'Blog' }
    ];
    return (
        <nav>
            <CgMenuGridR className="text-3xl lg:hidden md:hidden"></CgMenuGridR>
            <ul className="md:flex gap-10 mb-10">
                {
                    routes.map(route => <NavLink key={route.id} route={route}></NavLink>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;