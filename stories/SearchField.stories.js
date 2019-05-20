import React, { Component } from "react";
import SearchField from "../src/components/searchField/SearchField";
import { storiesOf } from "@storybook/react";

export default class SearchFieldTest extends Component {
    render() {
        const handleSearch =
            this.props.logger ||
            ((selection) => {
                console.log(selection);
            });

        return (
            <div>
                <label>Type at least 3 characters, then wait a second</label>
                <SearchField handleSearch={handleSearch} />
            </div>
        );
    }
}

storiesOf("SearchField", module).add("with search field", () => (
    <SearchFieldTest />
));
