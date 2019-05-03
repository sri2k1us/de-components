import React, { Component } from "react";
import Rate from "../src/components/rating/Rate";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export default class RatingTest extends Component {
    render() {
        return (
            <Rate
                value={number("Rating", 4.5)}
                total={10}
                readOnly={boolean("ReadOnly", false)}
                onDelete={() => console.log("delete rating")}
                onChange={(value) => console.log("new rating:" + value)}
            />
        );
    }
}

storiesOf("Rate", module).add("with rate", () => <RatingTest />);
