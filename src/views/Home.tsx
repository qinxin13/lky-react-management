import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {Outlet,useNavigate} from "react-router-dom"

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('栏目1', '/Page1', <PieChartOutlined />),
    getItem('栏目2', '/Page2', <DesktopOutlined />),
    getItem('User', '/User', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo=useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    //点击事件
    const menuClick=(e:{key:string})=>{
        console.log('dianji1',e.key)
        //点击跳转到对应路由 编程式导航 利用一个hook
        navigateTo(e.key)
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左侧侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
            </Sider>
            {/* 右边内容 */}
            <Layout>
                {/* 右边头部 */}
                <Header style={{ paddingLeft: "16px", background: colorBgContainer }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight:'64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>

                </Header>
                {/* 右边底部内容部分-白色盒子 */}
                <Content style={{ margin: '16px 16px 0' }} className='site-layout-background'>
                    {/* 窗口部分 */}
                    <Outlet/>
                    {/* <div className='.site-layout-background' style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        Bill is a cat.
                    </div> */}
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center',padding:0,height:"48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;