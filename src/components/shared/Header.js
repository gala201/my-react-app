import ArticleImage from "../items/ArticleImage"
import ArticleTitle from "../items/ArticleTitle"
import MovieArticle from "../items/MovieArticle"
import NavigationLink from "../items/NavigationLink"


function Header() {
    return (
        <header>
            <div className="naslov">
                <a href="" className="logo">MY WATCHLIST</a>
            </div>
            <nav className="navigation">
                <ul>
                    <li>
                        <a href="">All movies</a>
                    </li>
                    <li>
                        <a href="">Favorites</a>
                    </li>
                    <li>
                        <a href="">Add</a>
                    </li>
                    <li>
                        <a href="">Search</a>
                    </li>
                    <li>
                        <NavigationLink />
                    </li>



                </ul>
            </nav>
        </header>
    )
}

export default Header