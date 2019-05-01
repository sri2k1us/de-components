import React from "react";
import ReactDOM from "react-dom";

import { getMuiTheme, MuiThemeProvider } from "../lib";
import RateTest from "../../stories/Rate.stories";

it("renders rate without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <RateTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
