import React from 'react'
import styles from './Number.module.css'

function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>100%</h3>
        <p>Project Delivered</p>
      </div>
      <div className={styles.number_items}>
        <h3>2</h3>
        <p>project done</p>
      </div>
      <div className={styles.number_items}>
        <h3>30</h3>
        <p>Years of Experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>2</h3>
        <p>Happy Clients</p>
      </div>
    </div>
  )
}

export default Number