import React from "react";
import { storiesOf } from "@storybook/react";

import AnnouncerTest from "./Announcer.stories";
import RateTest from "./Rate.stories";

storiesOf("Announcer", module).add("with announcer", () => <AnnouncerTest />);
storiesOf("Rate", module).add("with rate", () => <RateTest />);
