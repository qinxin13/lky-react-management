import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式顺序如下
//样式初始化一般放在最前面
import 'reset-css'
//UI框架的样式
// import { Button } from 'antd/es/radio';
//全局样式 以@开头的为绝对路径
import './assets/style/global.scss'
//组建的样式
import App from "./App"
import { BrowserRouter } from "react-router-dom"
// import Router from "./router"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router/> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,

)
