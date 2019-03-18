import React, { Component } from 'react';
import Announcer from "./Announcer";


let msgQueue = [];
const TIMEOUT = 6000;

export const TOP = "top";
export const BOTTOM = "bottom";

export const RIGHT = "right";
export const LEFT = "left";
export const CENTER = "center";

export const INFO = "info";
export const ERROR = "error";
export const WARNING = "warning";
export const SUCCESS = "success";

class CyverseAnnouncer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      msg: "",
      open: false,
    };
  }

  componentDidMount() {
    let timer = setInterval(this.tickCallback, TIMEOUT);
    //display first message right away
    this.dequeue();
    this.setState({timer});
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  }

  dequeue = () => {
    if (msgQueue.length > 0) {
      this.setState({msg: msgQueue.shift(), open: true});
    }
  };

  handleClose = () => {
    this.setState({open: false}, () => {
      this.tickCallback();
    });
  };

  tickCallback = () => {
    this.dequeue();
  };

  render() {
    const {msg: {text, variant, duration, horizontal, vertical}, open} = this.state;
    return (
        <Announcer message={text}
                   variant={variant ? variant : INFO}
                   open={open}
                   duration={duration ? duration : TIMEOUT}
                   onClose={this.handleClose}
                   horizontal={horizontal? horizontal: CENTER}
                   vertical={vertical ? vertical : TOP}
                   />
    );
  }

}


export default CyverseAnnouncer;

/**
 *  Queue messages needed to be announced using CyverseAnnouncer
 *  @param {{text: string, variant: string, duration: number, horizontal: string, vertical: string}} msg
 *  - A message with configuration.
 *
 */
const announce = (msg) => {
  msgQueue.push(msg);
};

export { announce };
