import PropTypes from 'prop-types'

const NavLink = ({ route }) => {

    return (
        <div>
            <li className='hover:bg-yellow-500'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

NavLink.propTypes = {
    route: PropTypes.object
}
export default NavLink;