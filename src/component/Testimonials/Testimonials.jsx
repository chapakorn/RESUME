import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
          this is a best friend(for who?).
          </p>
          <img
            src="423944170_367716709509322_5312244892590336853_n.jpg"
            alt=""
          />
          <h4></h4>
          <p className={styles.bio}></p>
        </div>
        <div className={styles.testi_items}>
          <p>
            act art smart dog.
          </p>
          <img
            src="goodboy.png"
            alt=""
          />
          <h4>jeng radit</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          but sometime he so sleepy.
          </p>
          <img
            src="sleepboy.jpg"
            alt=""
          />
          <h4></h4>
          <p className={styles.bio}></p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;