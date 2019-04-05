/**
 *
 * @author sriram
 *
 */

import React, { Component } from "react";
import QuickLaunch from "../src/components/quickLaunch/QuickLaunch";
import { boolean } from "@storybook/addon-knobs";

class QuickLaunchTest extends Component {
    render() {
        const handleClick = () => {
            console.log("Badge clicked!");
        };
        const handleDelete = () => {
            console.log("Badge delete clicked!");
        };
        return (
            <React.Fragment>
                <QuickLaunch label="Batman" />
                <QuickLaunch
                    label="Superman"
                    handleClick={handleClick}
                    handleDelete={handleDelete}
                    isDefault={boolean("Default", false)}
                    isPublic={boolean("Public", false)}
                />
            </React.Fragment>
        );
    }
}

export default QuickLaunchTest;
