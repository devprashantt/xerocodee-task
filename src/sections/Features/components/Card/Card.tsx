import styles from "./Card.module.scss"

interface CardProps {
    title: string
    desc: string
    img: string
}

const Card = ({
    title, desc, img
}: CardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}><img src={img} alt="img" /></div>
            <div className={styles.content}>
                <p className={styles.title}>{title}</p>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}

export default Card