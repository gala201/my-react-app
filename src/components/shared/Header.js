import ArticleImage from "../items/ArticleImage"
import ArticleTitle from "../items/ArticleTitle"
import MovieArticle from "../items/MovieArticle"
import NavigationLink from "../items/NavigationLink"
import NavLink from "./NavLink"

 


function Header() {

    const links = [
        {
            linkName: "All movies",
            isActive: true
        },
        {
            linkName: "Favorites",
            isActive: false
        },
        {
            linkName: "Add",
            isActive: false
        },
        {
            linkName: "Search",
            isActive: false
        }
    ]

    return (
        <header>
            <div className="naslov">
                <a href="" className="logo">MY WATCHLIST</a>
            </div>
            <nav className="navigation">
                <ul>
                    <NavLink linkName={links[0].linkName} isActive={links[0].isActive}/>
                    <NavLink linkName={links[1].linkName} isActive={links[1].isActive}/>
                    <NavLink linkName={links[2].linkName} isActive={links[2].isActive}/>
                    <NavLink linkName={links[3].linkName} isActive={links[3].isActive}/>
                </ul>
            </nav>
        </header>
    )
}

export default Header