/**
 *
 * @author sriram
 *
 */
import React from "react";
import Chip from "@material-ui/core/Chip";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

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
        <Chip
            label={label}
            onDelete={handleDelete}
            onClick={handleClick}
            color={color}
            className={classes.chip}
            variant="outlined"
        />
    );
}

QuickLaunch.propTypes = {
    label: PropTypes.string.isRequired,
    onDelete: PropTypes.func,
    onClick: PropTypes.func,
    isDefault: PropTypes.bool,
    isPublic: PropTypes.bool,
    classes: PropTypes.object,
};

export default withStyles(styles1)(QuickLaunch);
