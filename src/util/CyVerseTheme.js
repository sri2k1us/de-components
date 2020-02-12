import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./CyVersePalette";

/**
 * Creates and returns a new theme. If an existing theme object is passed in,
 * it will be merged with the ui-lib theme.
 *
 * @param {object} theme - A theme to override/add on to the default ui-lib theme.
 * @returns {object}
 */
export default (theme) =>
    createMuiTheme(
        {
            palette: {
                type: "light",

                // All intentions should be defined with references to colors from the new palette.
                primary: {
                    main: palette.cobalt,
                },
                secondary: {
                    main: palette.sky,
                },
                error: {
                    main: palette.redSun,
                },
                warning: {
                    main: palette.yellow,
                },
                info: {
                    main: palette.silver,
                },
                success: {
                    main: palette.grass,
                },

                ...palette, // allow all of the colors to be referenced in the palette.
            },
            typography: {
                button: {
                    textTransform: "none",
                },
                useNextVariants: true,
            },
        },

        theme || {} // Allow callers to override/add to the theme with their own values.
    );
