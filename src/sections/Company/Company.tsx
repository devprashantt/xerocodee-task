import { images } from "../../constants"
import styles from "./Company.module.scss"

const company = [

    {
        id: 1,
        image: images.company1,
        name: "Company Name",
        designation: "Designation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        id: 2,
        image: images.company1,
        name: "Company Name",
        designation: "Designation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        id: 3,
        image: images.company1,
        name: "Company Name",
        designation: "Designation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
        id: 4,
        image: images.company1,
        name: "Company Name",
        designation: "Designation",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },

]

const Company = () => {
    return (
        <div className={styles.companies}>
            {
                company.map((item) => (
                    <div key={item.id} className={styles.company}>
                        <img src={item.image} alt="company" />
                    </div>
                ))
            }
        </div>
    )
}

export default Company