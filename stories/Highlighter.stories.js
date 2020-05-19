import React, { Component } from "react";
import Highlighter from "../src/components/highlighter/Highlighter";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export class HighlighterTest extends Component {
    render() {
        const searchText = "zzz";

        return (
            <div>
                <Highlighter search={text("Search:", searchText)}>
                    zzz Ez as 123, ABC...
                </Highlighter>
            </div>
        );
    }
}
storiesOf("Highlighter", module).add("with highlighter", () => (
    <HighlighterTest />
));
