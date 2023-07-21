//组件形式的写法
import App from "../App"
import Home from "../views/Home"
import About from "../views/About"
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom"

//两种路由模式的组件：BrowserRouter（History模式），HashRouter（Hash模式）
//BrowserRouter决定是哪种模式
//const baseRouter=()=>{
//    return (
 //   <BrowserRouter>
 //       <Routes>
    //        <Route path="/" element={<App />}>
 //               <Route path="/home" element={<Home />}></Route>
 //               <Route path="/about" element={<About />}></Route>
 //           </Route>
  //      </Routes>
  //  </BrowserRouter>
//)
//}
//以上写法可以简写为
const baseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                {/* 配置用户访问/的时候，可以通过Navigate重定向到/home路径 */}
                <Route path="/" element={<Navigate to="/home" />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)
export default baseRouter
//一个Route表示可以放一个路由，一个路径代表一个组件 Routes代表有多少组件