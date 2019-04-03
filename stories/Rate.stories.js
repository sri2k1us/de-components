import React, { Component } from "react";
import Rate from "../src/components/rating/Rate";

class RatingTest extends Component {
    render() {
        return <Rate label="Rating" value={4.5} />;
    }
}

export default RatingTest;
