import styles from "./Option.module.scss";

interface OptionProps {
  option: string;
  activeOption: string;
  setActiveOption: (option: string) => void;
}

const Option = ({ option, activeOption, setActiveOption }: OptionProps) => {
  return (
    <div
      className={`${styles.option} ${option === activeOption && styles.active}`}
      onClick={() => setActiveOption(option)}
    >
      {option}
    </div>
  );
};

export default Option;
