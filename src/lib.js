import CyVerseAnnouncer, {
    announce,
} from "./components/announcer/CyVerseAnnouncer";
import QuickLaunch from "./components/quickLaunch/QuickLaunch";
import Rate from "./components/rating/Rate";
import palette from "./util/CyVersePalette";
import { createMuiTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

const getMuiTheme = (theme) =>
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
    palette,
    Rate,
    getMuiTheme,
    MuiThemeProvider,
};
