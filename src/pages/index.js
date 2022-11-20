import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns, faGaugeHigh, faSitemap, faCode, faFolderOpen, faGear } from '@fortawesome/free-solid-svg-icons'

import styles from './index.module.css';
import { Redirect } from '@docusaurus/router';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Docusaurus Tutorial - 5min ⏱️
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();

    {/* <Redirect to="/docs/intro" /> */ }
    let FeatureItem = ({ icon, title, description }) => {
        return (
            <div className={clsx('col col--4')} style={{ textAlign: "center", color: "white" }}>
                <FontAwesomeIcon icon={icon} style={{ fontSize: "40px" }} />
                <p style={{ fontFamily: "Poppins", fontWeight: 600, fontSize: 25, color: "white", textAlign: "center" }}>{title}</p>
                <p style={{ textAlign: "center", color: "white" }}>{description}</p>
            </div>
        )
    }
    const screenshots = ["/img/screen1.png", "/img/screen2.png"]
    const [screenshotIndex, setScreenshotIndex] = useState(screenshots[Math.floor(Math.random() * screenshots.length)]);
    useEffect(() => {
        let interval = setInterval(() => {
            setScreenshotIndex(screenshots[Math.floor(Math.random() * screenshots.length)])
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    return (
        <Layout title={"Home"} description={siteConfig.tagline}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <div style={{ background: "url(/img/ararat.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ backdropFilter: "blur(10px) brightness(50%)", WebkitBackdropFilter: "blur(10px) brightness(50%)", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>
                        <p style={{
                            textAlign: "center",
                            marginTop: "auto",
                            marginBottom: "auto"
                        }} className={clsx("h2", styles.h2)}>Take Your Infrastructure To It's Peak</p>
                        <div style={{ display: "flex", justifyContent: "center", width: "200px", marginRight: "auto", marginLeft: "auto", marginTop: -30 }}>
                            <img src="/img/logo-horizontal.png" style={{
                                height: "80px", marginTop: 35
                            }} />
                            < p style={{ textAlign: "center", marginTop: 10, marginLeft: 10, fontSize: "70px", fontFamily: "Poppins", fontWeight: 600, color: "white" }}>Ararat</p>
                        </div>

                        <button className={clsx("buttons", styles.buttons)} style={{
                            padding: 10,
                            marginRight: 150,
                            marginLeft: 150,
                            color: "white",
                            backgroundColor: "#1A1A1A",
                            border: "none",
                            borderRadius: 10,
                            marginTop: -15,
                            fontSize: 20,
                            fontWeight: 600,
                            fontFamily: "Poppins",
                            cursor: "pointer"
                        }}><Link to="/docs/intro" style={{ color: "white", textDecoration: "none" }}>Get Started</Link></button>
                    </div>
                </div>
            </div>
            <main>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 100 }}>
                    <p style={{ marginRight: "auto", marginLeft: "auto", fontFamily: "Poppins", fontWeight: 600, fontSize: 35 }}>What is Hye Ararat?</p>
                    <p style={{
                        textAlign: "center", marginRight: 50, marginLeft: 50
                    }}>Hye Ararat is the next generation of container and virtual machine management. It is your one-stop shop for single application containers, full system containers, and KVM instances. All built on the incredible LXD platform.</p>
                    <img src="/img/demo.png" style={{ width: "50%" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 100, paddingBottom: 100, backgroundColor: "rgb(35, 35, 40)" }}>
                    <p style={{ marginRight: "auto", marginLeft: "auto", fontFamily: "Poppins", fontWeight: 600, fontSize: 35, color: "white" }}>Why choose Hye Ararat?</p>
                    <div className="row" style={{ marginRight: 10, marginLeft: 10 }}>
                        <FeatureItem icon={faTableColumns} title="All In One" description="Hye Ararat is a single application container, full system container, and KVM instance manager all in one package." />
                        <FeatureItem icon={faGaugeHigh} title="High Performant" description="Ararat was built from the ground up with performance in mind. Infact, we deploy instances 1034.61% faster than our leading competitor." />
                        <FeatureItem icon={faSitemap} title="Built for Scale" description="Whether you are looking to run just one instance or one thousand, Ararat was built to handle your needs." />
                        <FeatureItem icon={faCode} title="Powerful API" description="Ararat provides an incredible powerful API that allows you to integrate it into your applications and automate tasks easily." />
                        <FeatureItem icon={faFolderOpen} title="Free and Open Source" description="Hye Ararat is free to use and it's codebase is open source!" />
                        <FeatureItem icon={faGear} title="Lots of Control" description="Ararat gives you a massive amount of control over what how your setup actually functions." />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 100 }}>
                    <p style={{ marginRight: "auto", marginLeft: "auto", fontFamily: "Poppins", fontWeight: 600, fontSize: 35, color: "white" }}>Screenshots</p>
                    <img src={screenshotIndex} style={{ width: "50%", marginTop: 50 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingTop: 100, paddingBottom: 100, backgroundColor: "rgb(35, 35, 40)" }}>
                    <p style={{ marginRight: "auto", marginLeft: "auto", fontFamily: "Poppins", fontWeight: 600, fontSize: 35, color: "white" }}>What are you waiting for?</p>
                    <button className={clsx("buttons", styles.buttons)} style={{
                        padding: 10,
                        marginRight: 150,
                        marginLeft: 150,
                        color: "white",
                        backgroundColor: "#1A1A1A",
                        border: "none",
                        borderRadius: 10,
                        marginTop: -15,
                        fontSize: 20,
                        fontWeight: 600,
                        fontFamily: "Poppins",
                        cursor: "pointer"
                    }}><Link to="/docs/intro" style={{ color: "white", textDecoration: "none" }}>Upgrade To Ararat Now</Link></button>
                </div>
            </main>
        </Layout >
    );
}
