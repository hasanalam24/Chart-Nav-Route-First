

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
            {
                routes.map(route => <li key={route.id}><a href={`route.path`}>{route.name}</a></li>)
            }

        </nav>
    );
};

export default Navbar;