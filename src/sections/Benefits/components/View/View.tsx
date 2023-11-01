import styles from "./View.module.scss";

import Card from "./../Card/Card";
import { images } from "../../../../constants";

interface ViewProps {
  activeOption: string;
}

const cloudData = [
  {
    id: 1,
    title: "In Your Cloud",
    desc: "Deploy in your cloud account and manage your infrastructure as code.",
    img: images.illustration1
  }
]

const View = ({ activeOption }: ViewProps) => {

  return <div className={styles.view}>
    {
      activeOption === "cloud" && cloudData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          desc={data.desc}
          img={data.img}
          id={data.id}
        />
      ))
    }
    {
      activeOption === "infra" && cloudData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          desc={data.desc}
          img={data.img}
          id={data.id}
        />
      ))
    }
    {
      activeOption === "self_hosted" && cloudData.map((data) => (
        <Card
          key={data.id}
          title={data.title}
          desc={data.desc}
          img={data.img}
          id={data.id}
        />
      ))
    }
  </div>;
};

export default View;
