import styles from "./Navbar.module.scss"

import { images } from "../../constants"


const Navbar = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.logo}><img src={images.logo} alt="logo" /></div>
            <div className={styles.items}></div>
            <div className={styles.btn}></div>
        </div>
    )
}

export default Navbar