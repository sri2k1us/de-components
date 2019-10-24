import React, { Component } from "react";
import Rate from "../src/components/rating/Rate";
import { boolean, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export default class RatingTest extends Component {
    render() {
        const onChange = (event, value) => console.log("new rating:" + value);
        return (
            <Rate
                value={number("Rating", 4.5)}
                total={9999}
                readOnly={boolean("ReadOnly", false)}
                onDelete={() => console.log("delete rating")}
                onChange={onChange}
                name="Super Rating"
            />
        );
    }
}

storiesOf("Rate", module).add("with rate", () => <RatingTest />);
