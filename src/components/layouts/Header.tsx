import * as React from "react";
import { Layout, Row, Col, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import "./Header.less";

export const Header: React.StatelessComponent<{}> = () => {
    return (
        <Layout.Header style={{ background: "#fff", padding: 0 }}>
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
};
