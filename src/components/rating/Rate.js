/**
 *  @author sriram
 *
 **/

import React, { Component } from "react";
import Rating from "material-ui-rating";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import StarIcon from "@material-ui/icons/Star";
import red from "@material-ui/core/colors/red";
import orange from "@material-ui/core/colors/orange";
import grey from "@material-ui/core/colors/grey";

const style1 = (theme) => ({
    ratingDelete: {
        margin: 5,
        "&:hover": {
            backgroundColor: theme.palette.error.dark,
        },
    },
    total: {
        paddingTop: 17,
    },
    rating: {
        float: "left",
        marginTop: 5,
    },
    delete: {
        float: "left",
        marginBottom: 10,
    },
});

class Rate extends Component {
    render() {
        const {
            value,
            readOnly,
            total,
            onChange,
            onDelete,
            classes,
        } = this.props;

        const iconHovered = orange[500];
        const iconNormal = grey[300];

        //if user can delete, then she/he owns the rating so style it differently
        const iconFilled = onDelete ? iconHovered : red[500];

        return (
            <div>
                <div className={classes.rating}>
                    <Rating
                        value={value}
                        max={5}
                        readOnly={readOnly}
                        onChange={onChange}
                        iconFilled={<StarIcon nativeColor={iconFilled} />}
                        iconHovered={<StarIcon nativeColor={iconHovered} />}
                        iconNormal={<StarIcon nativeColor={iconNormal} />}
                    />
                </div>
                <div className={classes.delete}>
                    {onDelete && (
                        <IconButton
                            onClick={onDelete}
                            className={classes.ratingDelete}
                        >
                            <DeleteIcon fontSize="small" />
                        </IconButton>
                    )}
                </div>
                <div className={classes.total}>({total})</div>
            </div>
        );
    }
}

Rate.defaultProps = {
    value: 0,
    readOnly: true,
    total: 0,
};

Rate.propTypes = {
    value: PropTypes.number,
    readOnly: PropTypes.bool,
    total: PropTypes.number,
    onChange: PropTypes.func,
};

export default withStyles(style1)(Rate);
