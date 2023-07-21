import React from 'react'
//import './comp1.scss'//全局引入

//模块化引入
import styles from './comp1.module.scss'
export default function Comp(){
    return (
        <div className={styles.box}>
            <p>这是react里面的内容</p>
        </div>
    )
}