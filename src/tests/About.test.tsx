import * as React from "react";
// Jest snapshot test
// import * as TestUtils from "react-dom/test-utils";
// import AboutPage from "../components/about/AboutPage";

// describe("<AboutPage />", () => {
//     it("render", () => {
//         expect(TestUtils.createRenderer().render(
//             <AboutPage />
//         )).toMatchSnapshot();
//     });
// });
import {shallow} from "enzyme";
import AboutPage from "../components/pages/AboutPage";

describe("<AboutPage />", () => {
    it("should render without throwing an error", () => {
        expect(shallow(<AboutPage />).contains(<h1>About</h1>)).toBe(true);
    });
});