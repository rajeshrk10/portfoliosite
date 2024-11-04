import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
       
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Front-End Developer with over a year of experience in building dynamic and responsive web applications. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Adept at collaborating with cross-functional teams and utilizing state management tools like Redux and modern UI frameworks such as MUI and React-Bootstrap
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
              Proven track record in optimizing user experience through efficient data manipulation with Axios and Fetch. Strong foundation in back-end development with Python and database management using MySQL and MongoDB.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
