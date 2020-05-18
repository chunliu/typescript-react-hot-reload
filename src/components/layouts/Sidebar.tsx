import * as React from 'react';
import { Layout, Menu } from 'antd';
import * as Icons from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';

interface SidebarState {
    collapsed: boolean;
    mode: "vertical" | "inline" | "horizontal" | undefined;
}

class Sidebar extends React.Component<{}, SidebarState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            collapsed: false,
            mode: "inline",
        };
    }

    public render(): JSX.Element {
        return (
            <Layout.Sider collapsible collapsed={this.state.collapsed} onCollapse={this.toggle}>
                <div className="ant-layout-logo" />
                <Menu theme="dark" mode={this.state.mode} defaultSelectedKeys={["1"]}>
                    <Menu.Item key="1">
                        <Link to="/home">
                            <Icons.HomeOutlined />
                            <span className="nav-text">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/todo">
                            <Icons.CheckSquareOutlined />
                            <span className="nav-text">Todo</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/about">
                            <Icons.FileOutlined />
                            <span className="nav-text">About</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Layout.Sider>
        );
    }

    private toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
            mode: !this.state.collapsed ? "vertical" : "inline",
        });
    }
}

export default Sidebar;
