import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
    return (
        <section  className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("hero/hero-laptop.png")} 
                    alt="Hero with laptop" 
                    className={styles.aboutImg}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/click.png")} alt="Cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Development</h3>
                            <p>Experience in building responsive and optimized sites</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/browser.png")} alt="Server icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Development</h3>
                            <p>Experience in developing backend systems and APIs</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/UX.png")} alt="UX icon"/>
                        <div className={styles.aboutItemText}>
                            <h3>UI Designer</h3>
                            <p>Experience working with Figma to design landing pages that provide a great user experience.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};