import React, { Component } from "react";
import DEHyperlink from "../src/components/hyperlink/DEHyperlink";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export default class DEHyperlinkTest extends Component {
    render() {
        let linkText = "Test links";

        return <DEHyperlink text={text("Link Text", linkText)} />;
    }
}
storiesOf("DEHyperLink", module).add("with hyperlink", () => (
    <DEHyperlinkTest />
));
