import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import CyVerseAnnouncer, {
    announce,
    BOTTOM,
    ERROR,
    LEFT,
    RIGHT,
    TOP,
    WARNING,
} from "../src/components/announcer/CyVerseAnnouncer";
import { storiesOf } from "@storybook/react";
const action = () => {
    return (
        <Button
            color="secondary"
            size="small"
            onClick={() => console.log("Test Action clicked!")}
        >
            Test Action
        </Button>
    );
};
export class AnnouncerTest extends Component {
    render() {
        [
            {
                text: "this is an Information",
                duration: 3000,
                vertical: TOP,
                customAction: action,
            },
            {
                text: "this is Error Message",
                variant: ERROR,
                horizontal: RIGHT,
            },
            {
                text: "this is a Warning",
                variant: WARNING,
                duration: 10000,
                horizontal: LEFT,
                vertical: BOTTOM,
            },
        ].forEach((msg) => announce(msg));

        return <CyVerseAnnouncer />;
    }
}

storiesOf("Announcer", module).add("with announcer", () => <AnnouncerTest />);
