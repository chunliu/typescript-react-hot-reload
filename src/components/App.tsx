import * as React from "react";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { ConfigProvider } from "antd";
import enUS from 'antd/es/locale/en_US';
import {route} from "./routes";
import { configureStore, initStore } from "./store/configStore";

const store = configureStore();
store.dispatch<any>(initStore());

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <ConfigProvider locale={enUS}>
                <Provider store={store}>
                    <HashRouter children={route} />
                </Provider>
            </ConfigProvider>
        );
    }
}

export default App;
