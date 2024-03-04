import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Favorite Game forever</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="Dota-2-Logo.png" alt="" />
            <p>dota2: dog game.</p>
        </div>
        <div className={styles.port_items}>
            <img src="apex.png" alt="" />
            <p>apex: im done with this.</p>
        </div>
        <div className={styles.port_items}>
            <img src="valo.jpg" alt="" />
            <p>valorant:this too</p>
        </div>
        <div className={styles.port_items}>
            <img src="csgo.png" alt="" />
            <p>csgo: old but gold</p>
        </div>
        <div className={styles.port_items}>
            <img src="lol.jpg" alt="" />
            <p>lol: dont play!</p>
        </div>
        <div className={styles.port_items}>
            <img src="stra.png" alt="" />
            <p>stardew valley: best game forever</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio