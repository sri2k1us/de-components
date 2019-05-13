import AppTile from "./components/appTile/AppTile";
import CyVerseAnnouncer, {
    announce,
} from "./components/announcer/CyVerseAnnouncer";
import CopyTextArea from "./components/copy/CopyTextArea";
import DEHyperLink from "./components/hyperlink/DEHyperLink";
import Highlighter from "./components/highlighter/Highlighter";
import LoadingMask from "./components/loading/LoadingMask";
import QuickLaunch from "./components/quickLaunch/QuickLaunch";
import Rate from "./components/rating/Rate";
import SearchField from "./components/searchField/SearchField";
import TriggerField from "./components/triggerField/TriggerField";
import palette from "./util/CyVersePalette";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

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
    CopyTextArea,
    DEHyperLink,
    getMuiTheme,
    Highlighter,
    LoadingMask,
    MuiThemeProvider,
    palette,
    QuickLaunch,
    Rate,
    SearchField,
    TriggerField,
};
