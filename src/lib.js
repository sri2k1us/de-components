import AppTile from "./components/appTile/AppTile";
import CyVerseAnnouncer, {
    announce,
} from "./components/announcer/CyVerseAnnouncer";
import LoadingMask from "./components/loading/LoadingMask";
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
    announce,
    AppTile,
    CyVerseAnnouncer,
    getMuiTheme,
    LoadingMask,
    MuiThemeProvider,
    palette,
    QuickLaunch,
    Rate,
};
