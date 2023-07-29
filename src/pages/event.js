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
    const screenshots = ["/img/screen1.png", "/img/screen2.png", "/img/screen3.png", "/img/screen4.png", "/img/screen5.png", "/img/screen6.png"]
    const [screenshotIndex, setScreenshotIndex] = useState(screenshots[Math.floor(Math.random() * screenshots.length)]);
    useEffect(() => {
        let interval = setInterval(() => {
            setScreenshotIndex(screenshots[Math.floor(Math.random() * screenshots.length)])
        }, 5000)
        return () => clearInterval(interval)
    }, [])
    const [watching, setWatching] = useState(false);
    return (
        <Layout title={"Home"} description={siteConfig.tagline}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
            {watching ?
                <div style={{ position: "absolute", backdropFilter: "brightness(30%) blur(10px)", WebkitBackdropFilter: "blur(10px) brightness(30%)", width: "100vw", height: "95vh", alignItems: "center", justifyContent: "center", zIndex: 9999 }}>
                    < p style={{ textAlign: "center", marginTop: 10, fontSize: "70px", fontFamily: "Poppins", fontWeight: "bold", color: "white" }}>Hye Event July 24th 2023</p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                        <iframe width="60%" height="500" src="https://www.youtube.com/embed/uGKZXBozxXQ?autoplay=1" title="Hye Event July 24th 2023" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div style={{ display: "flex" }}>
                        <button onClick={() => {
                            setWatching(false)
                        }} style={{ marginRight: "auto", marginLeft: "auto", marginTop: 30 }}>Exit Video Player</button>
                    </div>
                </div>
                : ""}
            <div style={{ background: "url(/img/event-background.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "95vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ backdropFilter: "brightness(70%)", WebkitBackdropFilter: "brightness(70%)", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                    }}>

                        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginRight: "auto", marginLeft: "auto" }}>
                            < p style={{ textAlign: "center", marginTop: 10, fontSize: "70px", fontFamily: "Poppins", fontWeight: "bold", color: "white" }}>Hye Event</p>

                        </div>
                        <p style={{
                            textAlign: "center",
                            marginBottom: 30,
                            marginTop: -40,
                            fontWeight: 500,
                            fontSize: 25
                        }}>Introducing Hye Ararat Yergu, Camel Cloud, and updates to Hye Craft</p>

                        <button className={clsx("buttons", styles.buttons)} style={{
                            padding: 10,
                            marginRight: 150,
                            marginLeft: 150,
                            color: "white",
                            backgroundColor: "#2196f3",
                            border: "none",
                            borderRadius: 10,
                            marginTop: -15,
                            fontSize: 20,
                            fontWeight: 600,
                            fontFamily: "Poppins",
                            cursor: "pointer"
                        }} onClick={() => setWatching(true)}>Watch The Event</button>
                    </div>
                </div>
            </div>

        </Layout >
    );
}
