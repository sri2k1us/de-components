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

import build from "./util/DebugIDUtil";
import formatDate from "./util/DateFormatter";
import getRegExp from "./util/getRegExp";
import hasProps from "./util/hasProps";
import palette from "./util/CyVersePalette";
import {
    getMessage,
    formatMessage,
    formatHTMLMessage,
} from "./util/I18NWrapper";

import withStoreProvider from "./util/StoreProvider";

import DEAlertDialog from "./util/dialog/DEAlertDialog";
import DEConfirmationDialog from "./util/dialog/DEConfirmationDialog";
import DEDialogHeader from "./util/dialog/DEDialogHeader";
import DEPromptDialog from "./util/dialog/DEPromptDialog";

import ErrorExpansionPanel from "./util/ErrorExpansionPanel";
import ErrorHandler from "./util/ErrorHandler";
import EmptyTable from "./util/table/EmptyTable";
import EnhancedTableHead from "./util/table/EnhancedTableHead";

import TablePaginationActions from "./util/table/TablePaginationActions";
import { stableSort, getSorting } from "./util/table/TableSort";

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
    build,
    CyVerseAnnouncer,
    CopyTextArea,
    DEAlertDialog,
    DEConfirmationDialog,
    DEDialogHeader,
    DEPromptDialog,
    DEHyperLink,
    EmptyTable,
    EnhancedTableHead,
    ErrorExpansionPanel,
    ErrorHandler,
    formatDate,
    formatMessage,
    formatHTMLMessage,
    getMessage,
    getMuiTheme,
    getRegExp,
    getSorting,
    hasProps,
    Highlighter,
    LoadingMask,
    MuiThemeProvider,
    palette,
    QuickLaunch,
    Rate,
    SearchField,
    stableSort,
    TablePaginationActions,
    TriggerField,
    withStoreProvider,
};
