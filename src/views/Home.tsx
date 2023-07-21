import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet, useNavigate } from "react-router-dom"
import MainMenu from "../components/index"
const { Header, Content, Footer, Sider } = Layout;

const View: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    //const navigateTo=useNavigate()
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 左侧侧边栏 */}
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical" />
                <MainMenu></MainMenu>
            </Sider>
            {/* 右边内容 */}
            <Layout>
                {/* 右边头部 */}
                <Header style={{ paddingLeft: "16px", background: colorBgContainer }} >
                    {/* 面包屑 */}
                    <Breadcrumb style={{ lineHeight: '64px' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>

                </Header>
                {/* 右边底部内容部分-白色盒子 */}
                <Content style={{ margin: '16px 16px 0' }} className='site-layout-background'>
                    {/* 窗口部分 */}
                    <Outlet />
                    {/* <div className='.site-layout-background' style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
                        Bill is a cat.
                    </div> */}
                </Content>
                {/* 右边底部 */}
                <Footer style={{ textAlign: 'center', padding: 0, height: "48px" }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default View;