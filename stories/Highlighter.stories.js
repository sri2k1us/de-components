import React, { Component } from "react";
import Highlighter from "../src/components/highlighter/Highlighter";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export default class HighlighterTest extends Component {
    render() {
        const searchText = "see";

        return (
            <div>
                <Highlighter search={text("Search:", searchText)}>
                    I see you!
                </Highlighter>
            </div>
        );
    }
}
storiesOf("Highlighter", module).add("with highlighter", () => (
    <HighlighterTest />
));
