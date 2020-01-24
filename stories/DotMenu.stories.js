import React, { Component } from "react";
import { MenuItem } from "@material-ui/core";
import { storiesOf } from "@storybook/react";

import DotMenu from "../src/components/dotMenu/DotMenu";

export class DotMenuTest extends Component {
    render() {
        return (
            <DotMenu
                baseId="sampleDotMenu"
                render={(onClose) => [
                    <MenuItem
                        key={1}
                        onClick={() => {
                            onClose();
                            console.log("Clicked Item 1");
                        }}
                    >
                        Item 1
                    </MenuItem>,
                    <MenuItem
                        key={2}
                        onClick={() => {
                            onClose();
                            console.log("Clicked Item 2");
                        }}
                    >
                        Item 2
                    </MenuItem>,
                    <MenuItem
                        key={3}
                        onClick={() => {
                            onClose();
                            console.log("Clicked Item 3");
                        }}
                    >
                        Item 3
                    </MenuItem>,
                ]}
            />
        );
    }
}

storiesOf("DotMenu", module).add("with sample menu items", () => (
    <DotMenuTest />
));
