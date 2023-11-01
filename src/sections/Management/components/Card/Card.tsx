import styles from "./Card.module.scss"

interface CardProps {
    title: string
    desc: string
    img: string
    id: number
}

const Card = ({
    title, desc, img, id
}: CardProps) => {
    return (
        <div className={
            id % 2 === 0 ? `${styles.card} ${styles.reverse}` : styles.card
        }>
            <div className={styles.image}><img src={img} alt="img" /></div>
            <div className={styles.content}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.desc}>{desc}</p>
            </div>
        </div>
    )
}

export default Card