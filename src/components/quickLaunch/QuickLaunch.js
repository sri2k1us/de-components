/**
 *
 * @author sriram
 *
 */
import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";

const styles1 = (theme) => ({
    chip: {
        margin: theme.spacing.unit,
    },
});

function QuickLaunch(props) {
    const {
        label,
        handleClick,
        handleDelete,
        isDefault,
        isPublic,
        classes,
    } = props;
    const color = isDefault || isPublic ? "primary" : "";
    return (
        <React.Fragment>
            <Chip
                label={label}
                onDelete={handleDelete}
                onClick={handleClick}
                color={color}
                className={classes.chip}
                variant="outlined"
            />
        </React.Fragment>
    );
}

export default withStyles(styles1)(QuickLaunch);
