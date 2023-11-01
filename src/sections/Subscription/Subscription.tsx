import { Button, Input } from "../../components"
import { images } from "../../constants"
import styles from "./Subscription.module.scss"
import { useState } from "react"

const Subscription = () => {
    const [email, setEmail] = useState("")
    return (
        <div className={styles.subs}>
            <img src={images.plane} alt="plane" />
            <h2>
                Subscribe to Our Newsletter & get the <br />Coupon code
            </h2>
            <p>All your information is completely confidential</p>
            <div className={styles.action}>
                <Input
                    placeholder="Enter your email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={(e) => setEmail(e.target.value)}
                />
                <Button
                    text="Subscribe"
                    buttonType="filled"
                    onClick={() => console.log("Subscribe")}
                />
            </div>
        </div>
    )
}

export default Subscription