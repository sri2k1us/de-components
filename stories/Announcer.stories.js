import React, { Component } from "react";
import CyVerseAnnouncer, {
    announce,
    BOTTOM,
    ERROR,
    LEFT,
    RIGHT,
    TOP,
    WARNING
} from "../src/components/announcer/CyVerseAnnouncer";

class AnnouncerTest extends Component {
    render() {
        [
            {
                text: "this is an Information",
                duration: 3000,
                vertical: TOP
            },
            {
                text: "this is Error Message",
                variant: ERROR,
                horizontal: RIGHT
            },
            {
                text: "this is a Warning",
                variant: WARNING,
                duration: 10000,
                horizontal: LEFT,
                vertical: BOTTOM,
            },
        ].forEach(msg => announce(msg));

        return (
            <CyVerseAnnouncer/>
        )
    }
}

export default AnnouncerTest;
