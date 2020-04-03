import React, { Component } from "react";
import Rate from "../src/components/rating/Rate";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import Box from "@material-ui/core/Box";

export class RatingTest extends Component {
    render() {
        const onChange = (event, value) => console.log("new rating:" + value);
        return (
            <>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rate
                        value={4.5}
                        total={9999}
                        readOnly={boolean("ReadOnly", false)}
                        onDelete={() => console.log("delete rating")}
                        onChange={onChange}
                        name="Super Rating"
                    />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rate
                        value={0}
                        total={0}
                        readOnly={boolean("ReadOnly", false)}
                        onChange={onChange}
                        name="No Rating"
                    />
                </Box>
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rate
                        value={3}
                        total={999999}
                        readOnly={boolean("ReadOnly", true)}
                        onChange={onChange}
                        name="Avg Rating"
                    />
                </Box>
            </>
        );
    }
}

storiesOf("Rate", module).add("with rate", () => <RatingTest />);
