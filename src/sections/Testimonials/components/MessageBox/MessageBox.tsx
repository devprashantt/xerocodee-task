import styles from './MessageBox.module.scss'

interface MessageBoxProps {
    text: string
    personName: string
    personTitle: string
}

const MessageBox = ({
    text,
    personName,
    personTitle
}: MessageBoxProps) => {
    return (
        <div className={styles.box}>
            <div className={styles.quote}>
                <h1>“</h1>
            </div>
            <div className={styles.message}>
                <p className={styles.text}>
                    {text}
                </p>
                <p className={styles.author}>
                    <h4>- {personName}</h4>
                    <p>{personTitle}</p>
                </p>
            </div>
            <div className={styles.profile}>
                <img src="https://dqy38fnwh4fqs.cloudfront.net/UHR8AQB8MOQP96LFEM8NRQQG9Q9E/hr8aqb8moqp96lfem8nrqqg9q9e-profile.webp?v=1697427811202" alt="" />
            </div>
        </div>
    )
}

export default MessageBox