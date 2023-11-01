import { useState } from "react"

import { images } from "../../constants"
import styles from "./Benefits.module.scss"

import Header from "./components/Header/Header"
import View from "./components/View/View"
import Option from "./components/Option/Option"
import Card from "./components/Card/Card"

const infraOption = {
    cloud: "cloud",
    infra: "infra",
    self_hosted: "self hosted"
}

const deployData = [
    {
        id: 1,
        title: "Configurable Build and Deploy pipelines",
        desc: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
        img: images.illustration2
    },
    {
        id: 2,
        title: "Push to Deploy",
        desc: "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
        img: images.illustration3
    },
    {
        id: 3,
        title: "Multiple runtimes",
        desc: "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
        img: images.illustration4
    },
    {
        id: 4,
        title: "Scale infinitely",
        desc: "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
        img: images.illustration5
    }
]

const costData = [
    {
        id: 1,
        title: "Customizable cost dashboards and reports",
        desc: "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
        img: images.illustration6
    },
    {
        id: 2,
        title: "Preview infra costs",
        desc: "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
        img: images.illustration7
    },
    {
        id: 3,
        title: "Observability from day one",
        desc: "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
        img: images.illustration8
    }
]

const Benefits = () => {
    const [activeOption, setActiveOption] = useState(infraOption?.cloud);
    return (
        <div className={styles.benefits}>
            <div className={styles.header}>
                <h2>The Xerocodee way </h2>
                <img src={images.rocket} alt="rocket" />
            </div>
            <div className={styles.body}>
                <section className={styles.infra}>
                    <Header
                        title="Self serve Infrastructure"
                        subtitle="Accelerate by self-serving production-ready infrastructure and customize as you scale."
                        number={1}

                    />
                    <div className={styles.options}>
                        {
                            Object.values(infraOption).map((option, index) => (
                                <Option
                                    key={index}
                                    option={option}
                                    activeOption={activeOption}
                                    setActiveOption={setActiveOption}
                                />
                            ))
                        }
                    </div>
                    <View
                        activeOption={activeOption}
                    />
                </section>
                <section className={styles.deploy}>
                    <Header
                        title="Deploy applications, fast!"
                        subtitle="Set up automated deployments of your application in 5 minutes and get back to building stuff that matters."
                        number={2}

                    />
                    {
                        deployData.map((data) => (
                            <Card
                                key={data.id}
                                title={data.title}
                                desc={data.desc}
                                img={data.img}
                                id={data.id}
                            />
                        ))
                    }
                </section>
                <section className={styles.costs}>
                    <Header
                        title="Visibility into costs and metrics"
                        subtitle="Automatically track resource costs, across clouds, on every change. Visualize k8s pod metrics - CPU, Network, and Memory."
                        number={3}
                    />
                    {
                        costData.map((data) => (
                            <Card
                                key={data.id}
                                title={data.title}
                                desc={data.desc}
                                img={data.img}
                                id={data.id}
                            />
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default Benefits