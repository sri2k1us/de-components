/**
 *  @author sriram
 *
 **/

import React, { Component } from "react";
import PropTypes from "prop-types";
import numeral from "numeral";
import Rating from "@material-ui/lab/Rating";

import IconButton from "@material-ui/core/IconButton";
import { Tooltip, withStyles } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";

const style1 = (theme) => ({
    ratingDelete: {
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
    },
    total: {
        paddingTop: 3,
    },
    rating: {
        float: "left",
    },
    delete: {
        position: "relative",
        top: -20,
        left: 45,
        marginLeft: 2,
    },
});

class Rate extends Component {
    render() {
        const {
            name,
            value,
            readOnly,
            total,
            onChange,
            onDelete,
            classes,
        } = this.props;
        const totalString = numeral(total).format("0a");
        return (
            <React.Fragment>
                <div className={classes.rating}>
                    <Rating
                        name={name}
                        value={value}
                        readOnly={readOnly}
                        onChange={(event, newValue) => {
                            event.stopPropagation();
                            onChange(event, newValue);
                        }}
                        precision={0.5}
                        size="small"
                    />
                </div>
                <div className={classes.total}> ({totalString}) </div>
                <div className={classes.delete}>
                    {onDelete && (
                        <Tooltip title="Delete Rating">
                            <IconButton
                                onClick={onDelete}
                                size="small"
                                className={classes.ratingDelete}
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Tooltip>
                    )}
                </div>
            </React.Fragment>
        );
    }
}

Rate.defaultProps = {
    value: 0,
    readOnly: false,
    total: 0,
};

Rate.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.number,
    readOnly: PropTypes.bool,
    total: PropTypes.number,
    onChange: PropTypes.func,
};

export default withStyles(style1)(Rate);
