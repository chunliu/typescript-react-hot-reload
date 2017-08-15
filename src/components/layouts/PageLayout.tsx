import * as React from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
//import HomePage from "../home/HomePage";
import { Header } from "./Header";
import { Redirect } from "react-router-dom";
import {renderRoutes} from "react-router-config";
import { routes } from "../routes";
import "./PageLayout.less";


interface LayoutProps {};

interface LayoutState {};

class PageLayout extends React.Component<LayoutProps, LayoutState> {
    public render(): JSX.Element {
        return (
            <Layout className="ant-layout-has-sider">
                <Sidebar />
                <Layout>
                    <Layout.Content>
                        <Header />
                        <Redirect to="/home" /> 
                        {renderRoutes(routes)}
                    </Layout.Content>
                </Layout>
            </Layout>
        );
    }
}

export default PageLayout;
