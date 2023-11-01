import styles from "./Button.module.scss"

// INTERFACE
interface ButtonProps {
    text: string
    buttonType: "primary" | "secondary"
    onClick: () => void
}

const Button = ({
    text,
    onClick,
    buttonType
}: ButtonProps) => {
    return (
        <button
            className={`${styles.btn} ${styles[buttonType]}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}


export default Button