import * as React from "react";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { LocaleProvider } from "antd";
import enUS from "antd/lib/locale-provider/en_US";
import {route} from "./routes";
import { configureStore, initStore } from "./store/configStore";

const store = configureStore();
store.dispatch(initStore());

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <LocaleProvider locale={enUS}>
                <Provider store={store}>
                    <HashRouter children={route} />
                </Provider>
            </LocaleProvider>
        );
    }
}

export default App;
