import { images } from "../../constants"
import styles from "./Subscription.module.scss"

const Subscription = () => {
    return (
        <div className={styles.subs}>
            <img src={images.plane} alt="plane" />
            <h2>
                Subscribe to Our Newsletter & get the Coupon code.
            </h2>
            <p>All your information is completely confidential</p>
            <div>
                <div></div>
            </div>
        </div>
    )
}

export default Subscription