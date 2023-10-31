import styles from "./Landing.module.scss"

import { Navbar, Footer } from "../../components";

import {
  Advantages,
  Benefits,
  Company,
  Features,
  Hero,
  Management,
  Subscription,
  Testimonials,
} from "./../../sections"

const Landing = () => {
  return <div className={styles.landing}>
    <Navbar />
    <Hero />
    <Company />
    <Advantages />
    <Features />
    <Management />
    <Benefits />
    <Testimonials />
    <Subscription />
    <Footer />
  </div>;
};

export default Landing;
