import React, { Component } from "react";
import AppTile from "../src/components/appTile/AppTile";
import { storiesOf } from "@storybook/react";
import { MenuItem } from "@material-ui/core";

export default class AppTileTest extends Component {
    render() {
        const MenuItems = () => {
            return [
                <MenuItem>Info</MenuItem>,
                <MenuItem>Add To Favorite</MenuItem>,
                <MenuItem>Comments</MenuItem>,
            ];
        };
        return (
            <React.Fragment>
                <AppTile
                    uuid="1"
                    name="App Name App NameApp NameApp NameApp NameApp NameApp Name"
                    creator="Creator Name"
                    appLink="http://localhost"
                    description="Test description for an app card."
                    toolName="Tool Name"
                    toolVersion="0.0.1"
                    type="DE"
                    rating={{ average: 3.5, total: 3, user: 4 }}
                    link="https://qa.cyverse.org/de/?type=apps&app-id=676846d4-854a-11e4-980d-7f0fcca75dbb&system-id=de"
                    isBeta={false}
                    isPublic={true}
                    MenuItems={MenuItems}
                    isDisabled={true}
                    onDeleteRatingClick={() => console.log("Rating deleted!")}
                />
                <AppTile
                    uuid="2"
                    name="App Name 2"
                    creator="Creator Name2"
                    appLink="http://localhost"
                    description="Test description for an app card."
                    toolName="Tool Name"
                    toolVersion="0.0.1"
                    type="DE"
                    rating={{ average: 3, total: 100, user: 2 }}
                    link="https://qa.cyverse.org/de/?type=apps&app-id=676846d4-854a-11e4-980d-7f0fcca75dbb&system-id=de"
                    isBeta={false}
                    isPublic={false}
                    MenuItems={MenuItems}
                    isDisabled={false}
                    onDeleteRatingClick={() => console.log("Rating deleted!")}
                />
                <AppTile
                    uuid="3"
                    name="App Name 2"
                    creator=" Creator Name2 Creator Name2 Creator Name2 Creator Name2 Creator Name2"
                    appLink="http://localhost"
                    description="Test description for an app card."
                    toolName="Tool Name"
                    toolVersion="0.0.1"
                    type="DE"
                    rating={{ average: 5, total: 3 }}
                    link="https://qa.cyverse.org/de/?type=apps&app-id=676846d4-854a-11e4-980d-7f0fcca75dbb&system-id=de"
                    isBeta={true}
                    isPublic={true}
                    isDisabled={false}
                    onDeleteRatingClick={() => console.log("Rating deleted!")}
                />
                <AppTile
                    uuid="4"
                    name="App Name 4"
                    creator=" Creator"
                    appLink="http://localhost"
                    description="Test description for an app card."
                    toolName="Tool Name"
                    toolVersion="0.0.1"
                    type="agave"
                    rating={{ average: 0, total: 0 }}
                    link="https://qa.cyverse.org/de/?type=apps&app-id=676846d4-854a-11e4-980d-7f0fcca75dbb&system-id=de"
                    isBeta={false}
                    isPublic={true}
                    isDisabled={false}
                    onDeleteRatingClick={() => console.log("Rating deleted!")}
                />
            </React.Fragment>
        );
    }
}

storiesOf("AppTile", module).add("with app tile", () => <AppTileTest />);
