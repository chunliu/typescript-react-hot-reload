import * as React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {renderRoutes} from "react-router-config";
import { Header } from "./common/Header";
import {routes} from "./routes";

class App extends React.Component<{}, {}> {
    public render(): JSX.Element {
        return (
            <BrowserRouter>
                <div className="container-fluid">
                    <Header />
                    {renderRoutes(routes)}
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
