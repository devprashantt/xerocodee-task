import { Button } from "../../components"
import styles from "./Hero.module.scss"
import { images } from "../../constants"

const Hero = () => {
    return (
        <div className={styles.hero}>
            <h1>Build your audience and grow your <br /> brand</h1>
            <p>no more, no less. Deploy from our single pane of glass, manage them with ease and scale up as fast as your workload grows.</p>
            <Button
                text="Get started now"
                buttonType="primary"
                onClick={() => {
                    console.log("Get started now")
                }}
            />
            <div className={styles.image}>
                <img src={
                    images.hero
                } alt="hero" />
            </div>
        </div>
    )
}

export default Hero