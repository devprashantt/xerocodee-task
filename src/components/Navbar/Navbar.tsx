import styles from "./Navbar.module.scss"

import { images } from "../../constants"
import Button from "../Button/Button"

const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Career", path: "/career" },
    { id: 4, name: "Contact", path: "/contact" },
]

const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}><img src={images.logo} alt="logo" /></div>
            <div className={styles.items}>
                {
                    navItems.map(item => (
                        <div>
                            {
                                item.name
                            }
                        </div>
                    ))
                }
            </div>
            <div className={styles.btn}>
                <Button
                    buttonType="primary"
                    text="Sign Up"
                    onClick={() => {
                        console.log("Sign Up")
                    }}
                />
            </div>
        </div>
    )
}

export default Navbar