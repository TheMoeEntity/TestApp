import { useState } from 'react'
import styles from './Set.module.css'


const Set = ({title,data}) => {
    console.log(data)
    
  return (
    <div className={styles.set}>
        <span className={styles.title}>
        {title}
        </span>
        <div className={styles.wrapper}>
            {
                data.map((item,i)=> (
                    <div key={Math.random()*100000000} className={styles.card}>
                        <div className={styles.caption}>
                            {item.Title}
                        </div>
                    </div>
                ))

                
            }

        </div>
    </div>
  )
}

export default Set