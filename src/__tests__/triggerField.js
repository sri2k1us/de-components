import React from "react";
import ReactDOM from "react-dom";

import { getMuiTheme, MuiThemeProvider } from "../lib";
import { TriggerFieldTest } from "../../stories/TriggerField.stories";

it("renders trigger field without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <TriggerFieldTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
