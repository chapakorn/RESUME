import React from "react";
import styles from "./Testimonials.module.css";

const ter={
  img11:'423944170_367716709509322_5312244892590336853_n.jpg',
  img12:'goodboy.png',
  img13:'sleepboy.jpg'
}

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
            src={ter.img11}
          />
          <h4></h4>
          <p className={styles.bio}></p>
        </div>
        <div className={styles.testi_items}>
          <p>
            act art smart dog.
          </p>
          <img
            src={ter.img12}
          />
          <h4>jeng radit</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
          but sometime he so sleepy.
          </p>
          <img
            src={ter.img13}
          />
          <h4></h4>
          <p className={styles.bio}></p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;