import { useState } from "react";

import Option from "./components/Option/Option";
import View from "./components/View/View";

import { Button } from "../../components"
import styles from "./Advantages.module.scss"
import { images } from "../../constants";

const options = {
    apps: "apps",
    configs: "configs",
}

const Advantages = () => {
    const [activeOption, setActiveOption] = useState(options?.apps);
    return (
        <div className={styles.advantages}>
            <div className={styles.button}>
                <Button
                    text="Primary"
                    buttonType="secondary"
                    onClick={() => console.log("Primary Button Clicked")}
                />
            </div>
            <h2>
                <span>Save 1000s</span> of expensive coder hours
            </h2>
            <p>
                With cloud native technologies, we assist in modernising infrastructure and applications for resilience and scalability.
            </p>

            <section className={styles.body}>
                <div className={styles.option_row}>
                    {
                        Object.keys(options).map((option) => (
                            <Option
                                key={option}
                                option={option}
                                activeOption={activeOption}
                                setActiveOption={setActiveOption}
                            />
                        ))
                    }
                </div>
                <div>
                    <View
                        activeOption={activeOption}
                    />
                </div>
            </section>

            <section className={styles.compare}>
                <div className={styles.without}>
                    <h3>
                        Without Xerocode
                    </h3>
                    <img src={images.without_xerocode} alt="without_xerocode" /></div>
                <img src={images.profile} alt="rocket" className={styles.person} />
                <div className={styles.with}>
                    <h3>
                        With Xerocode
                    </h3><img src={images.with_xerocode} alt="with_xerocode" /></div>
            </section>
        </div>
    )
}

export default Advantages