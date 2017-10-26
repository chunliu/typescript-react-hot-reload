import * as React from "react";
import { RouteConfig } from "react-router-config";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import PageLayout from "./layouts/PageLayout";

export const routes: RouteConfig[] = [
    {
        path: "/home",
        exact: true,
        component: () => (<HomePage />),
    },
    {
        path: "/about",
        component: () => (<AboutPage />),
    },
];

export const route = (
    <Switch>
        <Route path="/" component={PageLayout} />
    </Switch>
);
