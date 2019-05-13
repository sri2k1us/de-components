import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { storiesOf } from "@storybook/react";
import TriggerField from "../src/components/triggerField/TriggerField";

export default class TriggerFieldTest extends Component {
    render() {
        const handleSearch =
            this.props.logger ||
            ((selection) => {
                console.log(selection);
            });

        return (
            <div>
                <label>Type at least 3 characters, then wait a second</label>
                <TriggerField handleSearch={handleSearch}>
                    <Button>Test Success!</Button>
                </TriggerField>
            </div>
        );
    }
}

storiesOf("TriggerField", module).add("with trigger field", () => (
    <TriggerFieldTest />
));
