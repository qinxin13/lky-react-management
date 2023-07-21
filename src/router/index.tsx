//对象形式写法
import Home from "../views/Home"
// import About from "../views/About"
import Login from "../views/Login"
//路由懒加载
import React, { lazy } from "react"
const About = lazy(() => import("../views/Page31"))
const User = lazy(() => import("../views/Page4"))
const Page1 = lazy(() => import("../views/Page1"))
const Page2 = lazy(() => import("../views/Page2"))
const Page31 = lazy(() => import("../views/Page31"))
//懒加载模式需要我们添加loading组件 需要在每个路由的element中加上<React.Suspense fallback={<div>Loading...</div>}></React.Suspense>
//懒加载的模式的组件的写法，外面需要套一层Loading的提示加载组件

//防止多次写，简化
const withLoadingComponent = (comp: JSX.Element) => (
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>

)
//Navigate重定向组件
import { Navigate } from "react-router-dom"
import { JsxElement } from "typescript"
// import Page3 from "../views/Page3"
const routes = [
    //嵌套路由 开始
    {
        path: "/",
        element: <Navigate to="/page1" />,

    },
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/Page1",
                element: withLoadingComponent(<Page1 />)
            },
            {
                path: "/Page2",
                element: withLoadingComponent(<Page2 />)
            },
            {
                path:'/Page3/Page31',
                element:withLoadingComponent(<Page31/>)
            }
        ]
    },
    //嵌套路由 结束
    //访问其他路径的时候，直接跳转到首页
    //登录页
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'*',
        element:<Navigate to="/page1"/>
    }
    
    // {
    //     path: "/home",
    //     element: <Home />
    // },
    // {
    //     path: "/about",
    //     element: withLoadingComponent(<About />)
    // },
    // {
    //     path: "/user",
    //     element: withLoadingComponent(<User />)
    // },
]
export default routes