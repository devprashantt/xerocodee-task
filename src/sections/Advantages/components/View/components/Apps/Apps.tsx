import { images } from "../../../../../../constants";
import styles from "./Apps.module.scss";

interface AppsProps {
}

const Apps = ({ }: AppsProps) => {
    return (
        <div className={styles.apps}>
            <img src={images.dashboard} alt="" />
        </div>
    )
}

export default Apps