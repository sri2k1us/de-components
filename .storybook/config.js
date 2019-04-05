import { addDecorator, configure } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { theme, MuiThemeProvider } from "../src/components/lib";

//wrap with mui theme
const themeDecorator = (storyFn) => (
    <MuiThemeProvider theme={theme}>{storyFn()}</MuiThemeProvider>
);

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(themeDecorator);
addDecorator(withKnobs);

configure(loadStories, module);
