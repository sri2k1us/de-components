import React from "react";

import { makeStyles, TableRow } from "@material-ui/core";
import palette from "../CyVersePalette";

/**
 * This style was copied from MUI's TableRow style and updated to have the selected and hover colors
 * stand out more clearly
 * https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/TableRow/TableRow.js
 */
const useStyles = makeStyles((theme) => ({
    root: {
        "&$selected": {
            backgroundColor:
                theme.palette.type === "light"
                    ? palette.lightBlue
                    : "rgba(255, 255, 255, 0.16)",
        },
        "&$hover:hover": {
            backgroundColor:
                theme.palette.type === "light"
                    ? "rgba(0, 0, 0, 0.13)"
                    : "rgba(255, 255, 255, 0.28)",
        },
    },
    selected: {},
    hover: {},
}));

function DETableRow(props) {
    const { children, ...rest } = props;
    const classes = useStyles();

    return (
        <TableRow classes={classes} {...rest}>
            {children}
        </TableRow>
    );
}

export default DETableRow;
