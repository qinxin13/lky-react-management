//登录组件
import { useEffect } from "react"
import styles from "./login.module.scss"
// import initLoginBg from "./init.ts"
const view = () => {

    //加载完组件后，在加载背景
    useEffect(() => {
        // initLoginBg();
        // window.onresize=function(){initLoginBg()}
    })
    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            {/* 登录盒子 */}
            <div className={styles.loginBox}>
                <div className={styles.title}>
                    <h1>后台管理&nbsp;&nbsp;lky</h1>
                    <p>Test</p>
                </div>
            </div>
        </div>
    )
}
export default view