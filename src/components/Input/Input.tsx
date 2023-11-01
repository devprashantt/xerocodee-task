import styles from "./Input.module.scss";

interface InputProps {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    name,
    type,
    placeholder,
    value,
    onChange,
    onBlur,
}: InputProps) => {
    return (
        <input
            className={styles.input}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
};

export default Input;
