import { images } from '../../constants'
import styles from './Footer.module.scss'

const linkData = [
    {
        title: 'Home',
        link: '/'
    },
    {
        title: 'About',
        link: '/about'
    },
    {
        title: 'Services',
        link: '/services'
    },
    {
        title: 'Contact',
        link: '/contact'
    },
]

const servicesData = [
    {
        title: 'Cloud Hosting',
        link: '/cloud-hosting'
    },
    {
        title: 'Dedicated Hosting',
        link: '/dedicated-hosting'
    },
    {
        title: 'VPS Hosting',
        link: '/vps-hosting'
    },
    {
        title: 'Domain Names',
        link: '/domain-names'
    },
    {
        title: 'Website Builder',
        link: '/website-builder'
    },
    {
        title: 'Email Hosting',
        link: '/email-hosting'
    },
]

const otherData = [
    {
        title: 'Blog',
        link: '/blog'
    },
    {
        title: 'Knowledgebase',
        link: '/knowledgebase'
    },
    {
        title: 'Status',
        link: '/status'
    },
    {
        title: 'Affiliates',
        link: '/affiliates'
    },
    {
        title: 'Contact Us',
        link: '/contact-us'
    },

]

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.links}>
                <div className={styles.section}>
                    <img src={images.logo} alt="" />
                    <p>You get just what you need to run your cloud
                        workloads--no more, no less.
                        Deploy from our single pane of glass,
                        manage them with ease and scale
                        up as fast as your workload grows</p>
                    <div className={styles.icons}>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                        <div className={styles.icon}></div>
                    </div>
                </div>
                <div className={styles.section}>
                    <h3>Our Links</h3>
                    {
                        linkData.map((data, index) => (
                            <a key={index} href={data.link}>{data.title}</a>
                        ))
                    }
                </div>
                <div className={styles.section}>
                    <h3>Our Services</h3>
                    {
                        servicesData.map((data, index) => (
                            <a key={index} href={data.link}>{data.title}</a>
                        ))
                    }
                </div>
                <div className={styles.section}>
                    <h3>Other Links</h3>
                    {
                        otherData.map((data, index) => (
                            <a key={index} href={data.link}>{data.title}</a>
                        ))
                    }
                </div>
            </div>

            <div className={styles.bottom}>
                <p className={styles.term}>Terms & Condition | Privacy Policy </p>
                <p className={styles.copyright}>Copyright © 2023 EXO-CODE TECHNOLOGIES | All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer