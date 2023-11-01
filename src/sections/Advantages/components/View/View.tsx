import styles from "./View.module.scss";

import Apps from "./components/Apps/Apps";

interface ViewProps {
  activeOption: string;
}

const View = ({ activeOption }: ViewProps) => {

  return <div className={styles.view}>
    {
      activeOption === "apps" && <Apps />
    }
    {
      activeOption === "configs" && <Apps />
    }
  </div>;
};

export default View;
