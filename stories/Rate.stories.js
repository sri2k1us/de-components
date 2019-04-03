import React, { Component } from "react";
import Rate from "../src/components/rating/Rate";
import { boolean } from "@storybook/addon-knobs";

class RatingTest extends Component {
    render() {
        return (
            <Rate
                label="Rating"
                value={4.5}
                readOnly={boolean("ReadOnly", false)}
            />
        );
    }
}

export default RatingTest;
