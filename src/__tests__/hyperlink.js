import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { getMuiTheme } from "../lib";
import { DEHyperlinkTest } from "../../stories/DEHyperlink.stories";

it("renders hyperlink without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MuiThemeProvider theme={getMuiTheme()}>
            <DEHyperlinkTest />
        </MuiThemeProvider>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
