import React from "react";
import ReactDOM from "react-dom";

import { getMuiTheme, MuiThemeProvider } from "../lib";
import AnnouncerTest from "../../stories/Announcer.stories";

it("renders announcer without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <AnnouncerTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
