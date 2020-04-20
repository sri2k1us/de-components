/**
 *  @author sriram
 *
 **/

import React from "react";

import PropTypes from "prop-types";
import { BOTTOM, LEFT, SUCCESS, TIMEOUT, WARNING } from "./AnnouncerConstants";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import { Snackbar, useTheme } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

function MySnackbarContent(props) {
    const { message, onClose, variant, action } = props;
    return (
        <Alert
            elevation={6}
            variant="filled"
            severity={variant}
            onClose={onClose}
            color={variant}
            action={action}
        >
            {message}
        </Alert>
    );
}

MySnackbarContent.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(["success", "warning", "error", "info"])
        .isRequired,
};

function Announcer(props) {
    const {
        message,
        variant,
        duration,
        horizontal,
        vertical,
        onClose,
        open,
        CustomAction,
    } = props;
    const theme = useTheme();
    let color = theme.palette.info.contrastText;
    switch (variant) {
        case Error:
            color = theme.palette.error.contrastText;
            break;
        case SUCCESS:
            color = theme.palette.success.contrastText;
            break;
        case WARNING:
            color = theme.palette.warning.contrastText;
            break;
    }
    if (message) {
        return (
            <div>
                <Snackbar
                    key={message}
                    anchorOrigin={{
                        vertical: vertical ? vertical : BOTTOM,
                        horizontal: horizontal ? horizontal : LEFT,
                    }}
                    open={open}
                    autoHideDuration={duration ? duration : TIMEOUT}
                    onClose={onClose}
                    disableWindowBlurListener={true}
                >
                    <MySnackbarContent
                        onClose={onClose}
                        variant={variant}
                        message={message}
                        action={[
                            CustomAction ? <CustomAction key="custom" /> : null,
                            <IconButton
                                key="close"
                                size="small"
                                style={{
                                    color: color,
                                }}
                                aria-label="Close"
                                onClick={() => {
                                    onClose();
                                }}
                            >
                                <CloseIcon />
                            </IconButton>,
                        ]}
                    />
                </Snackbar>
            </div>
        );
    } else {
        return null;
    }
}

Announcer.propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    message: PropTypes.string,
    variant: PropTypes.oneOf(["success", "warning", "error", "info"])
        .isRequired,
    duration: PropTypes.number,
    vertical: PropTypes.oneOf(["top", "bottom"]),
    horizontal: PropTypes.oneOf(["center", "right", "left"]),
};

export default Announcer;
