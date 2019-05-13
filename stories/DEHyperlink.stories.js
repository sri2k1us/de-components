import React, { Component } from "react";
import DEHyperLink from "../src/components/hyperlink/DEHyperLink";
import { text } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export default class DEHyperLinkTest extends Component {
    render() {
        let linkText = "Test links";

        return <DEHyperLink text={text("Link Text", linkText)} />;
    }
}
storiesOf("DEHyperLink", module).add("with hyperlink", () => (
    <DEHyperLinkTest />
));
