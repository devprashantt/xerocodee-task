import { images } from "../../constants"
import styles from "./Management.module.scss"
import Card from "./components/Card/Card"

const manageData = [
    {
        id: 1,
        title: "Real-time risk monitoring",
        desc: "Real-time risk monitoring across your infrastructure and application ecosystem will help you maintain ongoing compliance with more than 05+ different regulatory standards.",
        img: images.ad1

    },
    {
        id: 2,
        title: "Collaborative workflows",
        desc: "Share artefacts easily and collaborate with team members, auditors, and pen testers via automated procedures. To manage daily compliance with automatic notifications and reminders, create, assign, and track tasks.",
        img: images.ad2

    }
]

const Management = () => {
    return (
        <div className={styles.manage}>
            <h2 className={styles.title}>Modernize apps, infrastructure with cloud native tech for resilience, scalability.</h2>
            <section className={styles.body}>
                {
                    manageData.map((item) => (
                        <Card

                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                            img={item.img}
                            id={item.id}

                        />
                    ))
                }
            </section>
        </div>
    )
}

export default Management