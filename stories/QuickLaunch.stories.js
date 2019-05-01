/**
 *
 * @author sriram
 *
 */

import React, { Component } from "react";
import QuickLaunch from "../src/components/quickLaunch/QuickLaunch";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export default class QuickLaunchTest extends Component {
    render() {
        const handleClick = (event) => {
            console.log("Badge clicked!" + event.target);
        };
        const handleDelete = (event) => {
            console.log("Badge delete clicked!" + event.target);
        };
        return (
            <React.Fragment>
                <QuickLaunch id="test-debug-id1" label="Batman" />
                <QuickLaunch
                    id="test-debug-id2"
                    clickable={true}
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

storiesOf("QuickLaunch", module).add("with Quick Launch", () => (
    <QuickLaunchTest />
));
