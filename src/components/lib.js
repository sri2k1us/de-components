import CyVerseAnnouncer, { announce } from "./announcer/CyVerseAnnouncer";
import QuickLaunch from "./quickLaunch/QuickLaunch";
import Rate from "./rating/Rate";
import palette from "../../src/util/CyVersePalette";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";

window.React = React;
window.ReactDOM = ReactDOM;

const theme = () =>
    createMuiTheme({
        palette: {
            primary: {
                main: palette.blue,
            },
            secondary: {
                main: palette.lightBlue,
            },
        },
        typography: {
            button: {
                textTransform: "none",
            },
            useNextVariants: true,
        },
    });

export {
    CyVerseAnnouncer,
    announce,
    QuickLaunch,
    Rate,
    theme,
    MuiThemeProvider,
};
