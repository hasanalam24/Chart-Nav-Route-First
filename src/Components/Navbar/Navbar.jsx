import { useState } from "react";
import NavLink from "../NavLink/NavLink";
import { CgMenuGridR } from "react-icons/cg";
import { AiFillCloseCircle } from "react-icons/ai";


const Navbar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/products', name: 'Our Products' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/blog', name: 'Blog' }
    ];
    return (
        <nav className="bg-yellow-200 p-4">
            <div className="lg:hidden md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiFillCloseCircle className="text-3xl"></AiFillCloseCircle>
                        : <CgMenuGridR className="text-3xl "></CgMenuGridR>
                }

            </div>
            <ul className={`md:flex gap-10 mb-10 absolute bg-yellow-200 text-black px-4 shadow-lg
            ${open ? '' : 'hidden'}

            `}>

                {
                    routes.map(route => <NavLink key={route.id} route={route}></NavLink>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;