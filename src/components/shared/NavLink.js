import { Link } from "react-router-dom"

function NavLink(props) {

    let isActive = props.isActive

    return (
        <li>
            <Link to={props.url} style={{ fontWeight: `${isActive ? 'bold' : 'normal'}`, color: `${props.isActive ? "#27295A" : "#676767"}` }}>{props.linkName}
            </Link>
        </li>
    )

}

export default NavLink



