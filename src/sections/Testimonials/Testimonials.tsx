import { useState } from 'react'

import { images } from '../../constants'
import styles from './Testimonials.module.scss'

import MessageBox from './components/MessageBox/MessageBox'

const messageData = [
    {
        text: "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
        personName: "John",
        personTitle: "CEO of Company"
    },
    {
        text: "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
        personName: "Prashant",
        personTitle: "CEO of Company"
    },
    {
        text: "There are many variations of passages of Lorem Ipsum available but the majority have sufferg alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.",
        personName: "Gaurav Singh",
        personTitle: "CEO of Company"
    }
]

const Testimonials = () => {

    const [activeDot, setActiveDot] = useState(0);

    const handleLeft = () => {
        if (activeDot === 0) {
            setActiveDot(2)
        } else {
            setActiveDot(activeDot - 1)
        }
    }

    const handleRight = () => {
        if (activeDot === 2) {
            setActiveDot(0)
        } else {
            setActiveDot(activeDot + 1)
        }
    }

    return (
        <div className={styles.testimonials}>
            <div className={styles.header}><h2>See our success stories</h2></div>
            <div className={styles.body}>
                <div className={styles.arrow} onClick={
                    handleLeft
                }><img src={images.arrow_left} alt="" /></div>
                <div className={styles.message}>
                    <MessageBox
                        text={messageData[activeDot].text}
                        personName={messageData[activeDot].personName}
                        personTitle={messageData[activeDot].personTitle}
                    />
                </div>
                <div className={styles.arrow} onClick={

                    handleRight
                }>
                    <img src={images.arrow_right} alt="" />
                </div>
            </div>
            <div className={styles.dots}>
                <div className={activeDot === 0 ? styles.active : styles.dot}></div>
                <div className={activeDot === 1 ? styles.active : styles.dot}></div>
                <div className={activeDot === 2 ? styles.active : styles.dot}></div>
            </div>
        </div>
    )
}

export default Testimonials