import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Rajesh</h1>
        <p className={styles.description}>
          I'm a web developer developer with 2 years of experience in building dynamic and responsive website
        </p>
      
      </div>
     
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
