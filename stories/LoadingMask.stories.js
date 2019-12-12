/**
 *
 * @author sriram
 *
 */

import React, { Component } from "react";
import LoadingMask from "../src/components/loading/LoadingMask";
import { boolean } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";

export class LoadingMaskTest extends Component {
    constructor(props) {
        super(props);
        this.state = { mask: true };
    }
    render() {
        window.setTimeout(() => {
            this.setState({ mask: false });
        }, 3000);
        return (
            <LoadingMask loading={this.state.mask}>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc scelerisque dui vel dolor accumsan, ac commodo sem
                    ultricies. Vivamus vel ligula malesuada, laoreet est sed,
                    pharetra nunc. Ut leo nisi, consequat quis sollicitudin a,
                    euismod quis eros. Suspendisse pharetra vel velit at
                    faucibus. Quisque sollicitudin velit nisl, at venenatis
                    augue vulputate sed. Pellentesque accumsan felis eget
                    pharetra volutpat. Cras interdum suscipit neque nec
                    tristique. Donec eu tellus posuere, mattis nisi vel, cursus
                    justo. Donec maximus porttitor laoreet. Nunc aliquam sed
                    orci ut vulputate. Aenean imperdiet odio odio, ut
                    condimentum dolor ultrices ac. Nullam tempor ut lorem vitae
                    interdum. Aliquam in scelerisque massa. Sed pharetra eros
                    sit amet eros malesuada congue. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia Curae;
                    Aliquam erat volutpat. Morbi luctus ut arcu sit amet
                    tincidunt. Nunc accumsan malesuada lacus, quis aliquet massa
                    rutrum sed. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Nunc lacinia
                    ipsum eget dignissim feugiat. Cras sagittis turpis erat,
                    congue placerat magna aliquam quis. Pellentesque habitant
                    morbi tristique senectus et netus et malesuada fames ac
                    turpis egestas. Praesent eget nisl felis. Proin consectetur
                    lacus ac quam tincidunt, eget venenatis nulla sollicitudin.
                    Vivamus vel mi laoreet, dictum orci sit amet, consequat
                    dolor. Nunc eu ipsum ut lacus egestas semper. Praesent neque
                    dui, commodo eget lacus vitae, pellentesque venenatis erat.
                    Aliquam erat volutpat. Nulla justo odio, molestie sed dui
                    ac, pharetra consequat nulla. Suspendisse leo ipsum,
                    tincidunt aliquet lacus ac, lobortis sodales nulla. Fusce
                    ante dolor, rutrum vel aliquam quis, imperdiet vitae justo.
                    Donec condimentum mi nunc, ac eleifend eros ultrices vel.
                    Sed pharetra est risus, sit amet aliquam odio porttitor
                    vitae. Cras eget semper enim, quis semper lacus. Donec
                    tellus lectus, vulputate id fringilla sed, imperdiet a est.
                    Integer eleifend elit libero, vulputate egestas odio
                    sollicitudin eu. In hac habitasse platea dictumst. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Donec ut elit quis orci
                    cursus posuere non non nisi. In rutrum quis turpis ut
                    pellentesque. Mauris et ante nec metus vestibulum facilisis
                    non eget elit. Phasellus gravida molestie enim id bibendum.
                    Proin vitae bibendum odio, at efficitur augue. Duis a quam
                    nisl. Sed tristique odio ut lorem finibus finibus. Maecenas
                    lacinia elit a dolor ultrices, a tempus metus luctus. In ex
                    augue, malesuada euismod blandit non, suscipit eu ex. Mauris
                    at augue fermentum, pellentesque diam gravida, condimentum
                    tellus. Mauris eleifend porta suscipit. Praesent vestibulum,
                    elit sit amet ultricies aliquam, orci ipsum ultrices felis,
                    at sagittis erat nulla a lacus.
                </div>
            </LoadingMask>
        );
    }
}

storiesOf("Loading", module).add("with mask", () => <LoadingMaskTest />);
