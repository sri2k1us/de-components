import React, { Component } from "react";
import DEAlertDialog from "../src/util/dialog/DEAlertDialog";
import { storiesOf } from "@storybook/react";

export class DEAlertDialogTest extends Component {
    render() {
        return (
            <DEAlertDialog
                dialogOpen={true}
                alertMessage="Alert! This is only the beginning!"
                heading="Alert"
                handleClose={() => console.log("This dialog is closed!")}
            />
        );
    }
}

storiesOf("Alert Dialog", module).add("with alert dialog", () => (
    <DEAlertDialogTest />
));
