import { images } from "../../constants"
import styles from "./Features.module.scss"
import Card from "./components/Card/Card"

const cardData = [
    {
        id: 1,
        title: "Infrastructure management",
        desc: "Automated Cloud Infrastructure Workflow",
        img: images.infrastructure
    },
    {
        id: 2,
        title: "Security",
        desc: "Modern Secure Infrastructure Approach",
        img: images.cyber_security
    },
    {
        id: 3,
        title: "Networking",
        desc: "Flexible Secure Application Connectivity",
        img: images.neural_network
    },
    {
        id: 4,
        title: "Applications",
        desc: "Automate Application Deployment for Agility",
        img: images.development
    }
]

const Features = () => {
    return (
        <div className={styles.features}>
            <h2>
                Self serve infrastructure platform for <span>
                    scaling  <br />teams
                </span>
            </h2>
            <div className={styles.body}>
                {
                    cardData.map((card) => (
                        <Card
                            key={card.id}
                            title={card.title}
                            desc={card.desc}
                            img={card.img}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Features