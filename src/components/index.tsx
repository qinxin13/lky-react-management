import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

import type { MenuProps } from 'antd';
import {  Menu } from 'antd';
import {useNavigate,useLocation} from "react-router-dom";
import{ Children, useState } from 'react';
type MenuItem = Required<MenuProps>['items'][number];
//登录请求到数据之后，就可以跟这个items这个数组进行匹配
//整理菜单项
const items:MenuItem[]=[
    {
        label:'栏目1',
        key:'/Page1',
        icon:<PieChartOutlined />
    },
    {
        label:'栏目2',
        key:'/Page2',
        icon:<DesktopOutlined />
    },
    {
        label:'栏目3',
        key:'/Page3',
        icon:<UserOutlined />,
        children:[
            {
                label:'栏目3-1',
                key:'/Page3/Page31'
            },
            {
                label:'栏目3-2',
                key:'/Page3/Page32'
            },
            {
                label:'栏目3-3',
                key:'/Page3/Page33'
            }
        ]
    },
    {
        label:'栏目4',
        key:'/Page4',
        icon:<TeamOutlined />,
        children:[
            {
                label:'栏目4-1',
                key:'/Page4/Page41'
            },
            {
                label:'栏目4-2',
                key:'/Page4/Page42'
            },
        ]
    },
    {
        label:'栏目5',
        key:'/Page5',
        icon:<FileOutlined />
    },
]
const Comp: React.FC = () => {
    const navigateTo = useNavigate()
    const currentRoute=useLocation();
    console.log("-----",currentRoute)
    // const {
    //     token: { colorBgContainer },
    // } = theme.useToken();
    //点击事件
    const menuClick = (e: { key: string }) => {
        console.log('dianji1', e.key)
        //点击跳转到对应路由 编程式导航 利用一个hook
        navigateTo(e.key)
    }
    //需要让currentRoute.pathname跟items数组的每一项的children进行对比，如果相等，则找到了,就要上一级的key
    //这个key给到openKeys数组的元素，作为初始值
    let firstOpenKey:string=""
    //在这里进行对比
    function findKey(obj:{key:string}){
        return obj.key===currentRoute.pathname
    }
    //要对比多个children，需要遍历 
    //!表示对象不为空
    for(let i=0;i<items.length;i++){
        if(items[i]!['children']&&items[i]!['children'].lenght&&items[i]!['children'].find(findKey)){
            firstOpenKey=items[i]!.key;
            break;
        }
    }
    // items[]['children'].find()//这个结果如果找到拿到的是找到的对象，转布尔值就是true，如果找不到就是false

    //设置展开项的初始值
    const [openKeys, setOpenKeys] = useState(['']);

    const handleChange = (keys: string[]) => {
        //什么时候执行这个函数里面的代码？展开和回收某项菜单的时候执行这里的代码
        console.log(keys);//keys是一个数组，记录了当前哪一项是展开的（用key开始记录）
        //把这个数组修改成最后一项，因为只要一项展开，就是刚刚点击的哪一项
        setOpenKeys([keys[keys.length - 1]])
    }
    return (
        <Menu
            theme="dark"
            //defaultSelectedKeys表示当前样式所在的选中项的key
            defaultSelectedKeys={[currentRoute.pathname]}
            mode="inline" 
            //items就是菜单项的数据
            items={items}
            onClick={menuClick}
            //某项菜单展开和回收的事件
            onOpenChange={handleChange}
            //当前菜单展开项的key数组
            openKeys={openKeys}
        />
    )
}
export default Comp