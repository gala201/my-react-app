import ArticleImage from "../items/ArticleImage"
import ArticleTitle from "../items/ArticleTitle"
import MovieArticle from "../items/MovieArticle"
import NavigationLink from "../items/NavigationLink"
import NavLink from "./NavLink"





function Header() {

    const links = [
        {
            url: "/",
            linkName: "All movies",
            isActive: false
        },
        {
            url: "/favorites",
            linkName: "Favorites",
            isActive: true
        },
        {
            url: "/add",
            linkName: "Add",
            isActive: true
        },
        {
            url: "/search",
            linkName: "Search",
            isActive: true
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
                                    <NavLink linkName={v.linkName} isActive={v.isActive} url={v.url} />
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