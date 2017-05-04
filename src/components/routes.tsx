import * as React from "react";
import { RouteConfig } from "react-router-config";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";

export const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component: () => (<HomePage />),
    },
    {
        path: "/about",
        component: () => (<AboutPage />),
    },
];
