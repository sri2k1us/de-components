import React, { useState } from "react";
import Lock from "@material-ui/icons/Lock";
import Report from "@material-ui/icons/Report";
import palette from "../../util/CyVersePalette";
import Beta from "./betaSymbol.png";
import md5 from "md5";
import { Tooltip, withStyles } from "@material-ui/core";
import Rate from "../rating/Rate";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import Paper from "@material-ui/core/Paper";
import { injectIntl } from "react-intl";
import intlData from "./messages";
import withI18N, { formatMessage } from "../../util/I18NWrapper";
import classnames from "classnames";

const GRAVATAR_URL = "https://www.gravatar.com/avatar/";
const GRAVATAR_OPTIONS = "d=identicon&s=60";

const styles = (theme) => ({
    card: {
        minWidth: 300,
        maxWidth: 400,
        minHeight: 120,
        maxHeight: 120,
        margin: 15,
        padding: 5,
        cursor: "pointer",
        "&:hover": {
            border: "1px solid",
        },
    },
    selectedCard: {
        border: "1px solid",
        backgroundColor: palette.lightGray,
    },
    avatar: {
        float: "left",
        margin: 10,
    },
    type: {
        textAlign: "center",
        fontSize: 10,
    },
    name: {
        margin: 10,
        fontSize: 12,
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inline-block",
        maxWidth: 150,
        "&:hover": {
            textDecoration: "underline",
            cursor: "pointer",
        },
    },
    more: {
        float: "right",
        height: 120,
    },
    creator: {
        margin: 10,
        top: 50,
        fontSize: 12,
        fontStyle: "italic",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        display: "inline-block",
        maxWidth: 150,
    },
    status: {
        position: "relative",
        top: 40,
        right: -10,
    },
    statusNoMenu: {
        position: "relative",
        top: 90,
        right: 10,
    },
    rating: {
        width: "80%",
    },
});

function AppStatus(props) {
    const { isPublic, isBeta, isDisabled, intl } = props;
    if (!isPublic) {
        return (
            <Tooltip title={formatMessage(intl, "privateAppTooltip")}>
                <Lock style={{ color: palette.blue }} />
            </Tooltip>
        );
    }
    if (isBeta) {
        return (
            <Tooltip title={formatMessage(intl, "betaAppTooltip")}>
                <img src={Beta} height={16} alt="beta" />
            </Tooltip>
        );
    }
    if (isDisabled) {
        return (
            <Tooltip title={formatMessage(intl, "disabledAppTooltip")}>
                <Report style={{ color: palette.red }} />
            </Tooltip>
        );
    }
    return null;
}

function AppTile(props) {
    const {
        classes,
        uuid,
        name,
        creator,
        rating,
        type,
        isPublic,
        isBeta,
        isDisabled,
        isExternal,
        onRatingChange,
        onDeleteRatingClick,
        MenuItems,
        intl,
        onAppNameClicked,
        onAppSelected,
        selected,
    } = props;

    const {
        average: averageRating,
        user: userRating,
        total: totalRating,
    } = rating;

    const [anchorEl, setAnchorEl] = useState("");
    const open = Boolean(anchorEl);

    let avatarImgSrc = GRAVATAR_URL + md5(uuid) + "?" + GRAVATAR_OPTIONS;

    const handleAppSelection = () => {};

    return (
        <Paper
            className={
                selected
                    ? classnames(classes.card, classes.selectedCard)
                    : classes.card
            }
            onClick={handleAppSelection}
        >
            <div className={classes.avatar}>
                <div>
                    <img src={avatarImgSrc} alt="avatar image" />
                </div>
                <div className={classes.type}>{type.toLowerCase()}</div>
            </div>
            <div>
                <div
                    title={name}
                    className={classes.name}
                    onClick={onAppNameClicked}
                >
                    {name}
                </div>
                <div className={classes.more}>
                    {MenuItems != null && (
                        <div>
                            <IconButton
                                aria-label="More"
                                aria-owns={open ? "long-menu" : null}
                                aria-haspopup="true"
                                onClick={(event) =>
                                    setAnchorEl(event.currentTarget)
                                }
                            >
                                <MoreVertIcon />
                            </IconButton>
                            <Menu
                                anchorEl={anchorEl}
                                open={open}
                                onClose={() => setAnchorEl(null)}
                            >
                                <MenuItems />
                            </Menu>
                        </div>
                    )}
                    <div
                        className={
                            MenuItems ? classes.status : classes.statusNoMenu
                        }
                    >
                        <AppStatus
                            isPublic={isPublic}
                            isBeta={isBeta}
                            isDisabled={isDisabled}
                            intl={intl}
                        />
                    </div>
                </div>
            </div>
            <div className={classes.creator}>{creator}</div>
            <div className={classes.rating}>
                <Rate
                    value={userRating ? userRating : averageRating}
                    readOnly={isExternal}
                    total={totalRating}
                    onChange={onRatingChange}
                    onDelete={userRating ? onDeleteRatingClick : undefined}
                />
            </div>
        </Paper>
    );
}

AppTile.defaultProps = {};

export default withStyles(styles)(withI18N(injectIntl(AppTile), intlData));
