function NavLink(props) {
    return(
        <li>
            <a href="" style={{fontWeight: "700", color: `${props.isActive ? "#27295A" : "#676767"}`} }>{props.linkName}</a>           
        </li>
    )

}

export default NavLink



