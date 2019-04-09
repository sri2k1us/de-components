import React, { Component } from "react";
import Rate from "../src/components/rating/Rate";
import { boolean, number } from "@storybook/addon-knobs";

class RatingTest extends Component {
    render() {
        return (
            <React.Fragment>
                <Rate
                    value={number("Rating", 4.5)}
                    total={10}
                    readOnly={boolean("ReadOnly", false)}
                    onDelete={() => console.log("delete rating")}
                    onchange={(value) => console.log("new rating:" + value)}
                />
            </React.Fragment>
        );
    }
}

export default RatingTest;
