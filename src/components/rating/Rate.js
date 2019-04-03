/**
 *  @author sriram
 *
 **/

import React, { Component } from "react";
import Rating from "react-rating";
import whitestar from "./star-white.gif";
import goldstar from "./star-gold.gif";
import redstar from "./star-red.gif";
import PropTypes from "prop-types";

class Rate extends Component {
    render() {
        const { label, value, readOnly, total } = this.props;
        return (
            <React.Fragment>
                <b>{label}: </b>
                <Rating
                    placeholderRating={value}
                    emptySymbol={
                        <img
                            src={whitestar}
                            className="icon"
                            alt="white star"
                        />
                    }
                    fullSymbol={
                        <img src={goldstar} className="icon" alt="gold star" />
                    }
                    placeholderSymbol={
                        <img src={redstar} className="icon" alt="red star" />
                    }
                    fractions={2}
                    readonly={true}
                />
                <span style={{ paddingLeft: 3 }}>({total})</span>
            </React.Fragment>
        );
    }
}

Rate.defaultProps = {
    value: 0,
    readOnly: true,
    total: 0,
};

Rate.propTypes = {
    value: PropTypes.number,
    label: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    total: PropTypes.number,
};

export default Rate;
