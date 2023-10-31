import styles from "./Button.module.scss"

// INTERFACE
interface ButtonProps {
    text: string
    onClick: () => void
}

const Button = ({
    text,
    onClick
}: ButtonProps) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {
                text
            }
        </button>
    )
}


export default Button