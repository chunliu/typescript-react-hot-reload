import * as React from "react";
import { Card } from "antd";

class AboutPage extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <Card bordered title="About" style={{ margin: "16px 16px"}}>
                <p>A demo web app based on React and written in TypeScript. </p>
                <p>For details, please see &nbsp;
                    <a href="https://github.com/chunliu/typescript-react-hot-reload">
                        https://github.com/chunliu/typescript-react-hot-reload
                    </a>
                </p>
            </Card>
        );
    }
}

export default AboutPage;
