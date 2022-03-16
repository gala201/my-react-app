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
                    {
                        links.map((v, i) => {
                            return (
                                <li key={i}>
                                    <NavLink linkName={v.linkName} isActive={v.isActive} />
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </header>
    )
}

export default Header