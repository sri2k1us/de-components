import React from "react";
import { storiesOf } from "@storybook/react";

import AnnouncerTest from "./Announcer.stories";
import LoadingMaskTest from "./LoadingMask.stories";
import QuickLaunchTest from "./QuickLaunch.stories";
import RateTest from "./Rate.stories";

storiesOf("Announcer", module).add("with announcer", () => <AnnouncerTest />);
storiesOf("Loading", module).add("with mask", () => <LoadingMaskTest />);
storiesOf("Rate", module).add("with rate", () => <RateTest />);
storiesOf("QuickLaunch", module).add("with Quick Launch", () => (
    <QuickLaunchTest />
));
