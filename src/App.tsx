import { useState } from 'react'
import React from 'react'
import {Outlet,Link,useRoutes} from "react-router-dom"
import router from "./router"
//outlet相当于vue中的routerview，可以展示组件 Link可以实现点击跳转
// import 'antd/dist/antd.css'
function App() {
  const [count, setCount] = useState(0)
  const outlet=useRoutes(router)

  return (
    <div className='App'>
      {/* <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/user">User</Link> */}
     {/* 占位符组件，类似于窗口，用来展示组件，有点像vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
      {/* {outlet}就是一个窗口 */}
    </div>

  )
}

export default App
