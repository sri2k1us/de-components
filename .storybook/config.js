import React from "react";
import { addDecorator, configure } from "@storybook/react";
import { withConsole } from "@storybook/addon-console";
import { withKnobs } from "@storybook/addon-knobs";
import { getMuiTheme } from "../src/lib";
import { MuiThemeProvider } from "@material-ui/core/styles";

//redirect console error / logs / warns to action logger
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

//wrap with mui theme
const themeDecorator = (storyFn) => (
    <MuiThemeProvider theme={getMuiTheme()}>{storyFn()}</MuiThemeProvider>
);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);

addDecorator(themeDecorator);
addDecorator(withKnobs);

configure(req, module);
