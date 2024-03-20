import PropTypes from 'prop-types'

const NavLink = ({ route }) => {

    return (
        <div>
            <li>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

NavLink.propTypes = {
    route: PropTypes.object
}
export default NavLink;