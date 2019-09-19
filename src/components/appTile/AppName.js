import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import classnames from "classnames";
import withI18N, { formatMessage } from "../../util/I18NWrapper";
import { injectIntl } from "react-intl";
import intlData from "./messages";

const useStyles = makeStyles((theme) => ({
    name: {
        margin: 10,
        fontSize: 12,
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        display: "inline-block",
        maxWidth: 150,
    },
    nameHover: {
        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
        },
    },
}));

function AppName(props) {
    const { isDisabled, name, onAppNameClicked, intl } = props;
    const classes = useStyles();
    const classname = isDisabled
        ? classes.name
        : classnames(classes.name, classes.nameHover);
    const title = isDisabled
        ? formatMessage(intl, "disabledAppTooltip")
        : formatMessage(intl, "useAppTooltip");
    const handleClick = isDisabled ? undefined : onAppNameClicked;
    return (
        <div title={title} className={classname} onClick={handleClick}>
            {name}
        </div>
    );
}
AppName.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    onAppNameClicked: PropTypes.func,
};
export default withI18N(injectIntl(AppName), intlData);
