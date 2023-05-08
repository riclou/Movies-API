import logo from "./logo.png"
import { Link } from "react-router-dom"
import styles from "./Header.module.css"
import HeaderLinks from "components/HeaderLinks"

const Header = () => {

    return (
        <header className={styles.header}>
            <Link to={"./"}>
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <HeaderLinks url={"./"}>
                    Home
                </HeaderLinks>
                <HeaderLinks url={"./favoritos"}>
                    Favoritos
                </HeaderLinks>
            </nav>
        </header>
    )
}

export default Header