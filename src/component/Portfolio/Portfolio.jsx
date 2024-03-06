import React from 'react'
import styles from './Portfolio.module.css'

const user ={
  img1:'Dota-2-Logo.png',
  img2:'apex.png',
  img3:'valo.jpg',
  img4:'csgo.png',
  img5:'lol.jpg',
  img6:'stra.png'
}
function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>My Favorite Game forever</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src={user.img1} />
            <p>dota2: dog game.</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img2} />
            <p>apex: im done with this.</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img3} />
            <p>valorant:this too</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img4}  />
            <p>csgo: old but gold</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img5}  />
            <p>lol: dont play!</p>
        </div>
        <div className={styles.port_items}>
            <img src={user.img6}  />
            <p>stardew valley: best game forever</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio