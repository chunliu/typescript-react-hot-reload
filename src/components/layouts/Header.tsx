import * as React from "react";
import { Layout, Row, Col, Menu, Icon } from "antd";
// import { Layout, Icon, Menu } from "antd";
import { Link } from 'react-router-dom'
import "./Header.less";

interface HeaderProps {};

interface HeaderState {};

export class Header extends React.Component<HeaderProps, HeaderState> {
    public render(): JSX.Element {
        return (
            <Layout.Header style={{ background: '#fff', padding: 0 }}>
                <Row type="flex" justify="end" align="middle">
                    <Col span={3}>
                        <Menu mode="horizontal" className="user-logout">
                            <Menu.SubMenu title={<span><Icon type="user" />{"User 1"}</span>} >
                                <Menu.Item key="logOut"><Link to="#" >Logout</Link></Menu.Item>
                            </Menu.SubMenu>
                        </Menu>  
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}
