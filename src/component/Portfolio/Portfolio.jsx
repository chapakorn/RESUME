import React from 'react'
import styles from './Portfolio.module.css'

const user ={
  img1:'data:image/png;base64,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',
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