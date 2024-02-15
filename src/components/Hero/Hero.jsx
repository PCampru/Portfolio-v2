import React, {useEffect} from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm Pol</h1>
                <p className={styles.description}>
                    Junior Full Stack Developer. Transforming Ideas into Innovative Solutions. 
                    <br />
                    Reach out if you'd like to learn more!
                </p>
                <div className={styles.socialContainer}>
                    <a href={getImageUrl("resume/resumePolCamprubi.pdf")} className={styles.contactBtn}>Download CV</a>
                    <a href="mailTo:polcampru@gmail.com" className={styles.contactBtn}>Contact Me</a>
                </div>
            </div>
            <img src={getImageUrl("hero/profile-photo.png")} alt="Profile photo" className={styles.heroImg}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
};