import palette from "../../util/CyVersePalette";

export default {
    normal: {
        color: palette.darkBlue,
        cursor: "pointer",
        textAlign: "left",
        fontSize: "11px",
        margin: 2,
        "&:hover": {
            textDecoration: "underline",
            backgroundColor: palette.lightGray,
        },
    },
};
