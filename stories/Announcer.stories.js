import React, { Component } from "react";
import CyverseAnnouncer, {
    announce,
    BOTTOM,
    ERROR,
    LEFT,
    RIGHT,
    TOP,
    WARNING
} from "../src/components/announcer/CyverseAnnouncer";


class AnnouncerTest extends Component {
    render() {
        let msgs = [
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

            }];
        for (let i = 0; i < msgs.length; i++) {
            announce(msgs[i]);
        }

        return (
            <CyverseAnnouncer/>
        )
    }
}

export default AnnouncerTest;