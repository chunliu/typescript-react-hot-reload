import * as React from "react";
import {HashRouter} from "react-router-dom";
import {route} from "./routes";

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <HashRouter children={route} />
        );
    }
}

export default App;
