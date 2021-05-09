import React, { Component } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
let lastTime = performance.now();

const rotate = keyframes`
  50% {
    opacity: 0
  }
`;
const TypingParagraph = styled.span`
  color: tomato
  &::before {
    content: '|';
    color: transparent
  }
  &::after {
    content: '|';
    display: inline-flex
    animation: ${rotate} 0.7s linear infinite;
  }
`;

class Typewriter extends Component {
  state = {
    output: "",
  };
  index = 0;
  rafRef = null;
  timeoutRef = null;

  componentDidMount() {
    this.animationManager();
  }

  componentWillUnmount() {
    // cleanup
    if (this.timeoutRef) {
      clearTimeout(this.timeoutRef);
    }
    if (this.rafRef) {
      cancelAnimationFrame(this.rafRef);
    }
  }

  timer = (duration) => {
    return new Promise((resolve) => window.setTimeout(resolve, duration));
  };

  animationFrame = (callback, ...args) => {
    return new Promise((resolve) => {
      window.requestAnimationFrame((time) => callback(time, ...args));
    });
  };

  animationManager = () => {
    const deleteFunc = (time, typingData) => {
      this.deleteEffect(time, async () => {
        await this.timer(this.props.pauseBeforeRestarting);
        this.index = this.index === typingData.length - 1 ? 0 : this.index + 1;
        this.animationManager();
      });
    };

    const typeFunc = (time) => {
      const typingData = this.props.data;
      this.typeEffect(time, typingData[this.index], async () => {
        await this.timer(this.props.pauseBeforeDeleting);
        await this.animationFrame(deleteFunc, typingData);
      });
    };

    this.animationFrame(typeFunc);
  };

  typeEffect = (time, text, callback) => {
    if (time - lastTime < this.props.typingSpeed) {
      this.rafRef = requestAnimationFrame((thisTime) =>
        this.typeEffect(thisTime, text, callback)
      );
      return;
    }
    lastTime = time;
    this.setState({
      output: text.substr(0, this.state.output.length + 1),
    });
    if (this.state.output.length < text.length) {
      this.rafRef = requestAnimationFrame((thisTime) =>
        this.typeEffect(thisTime, text, callback)
      );
    } else {
      return callback();
    }
  };

  deleteEffect = (time, callback) => {
    if (time - lastTime < this.props.typingSpeed) {
      this.rafRef = requestAnimationFrame((thisTime) =>
        this.deleteEffect(thisTime, callback)
      );
      return;
    }
    lastTime = time;
    this.setState({
      output: this.state.output.substr(0, this.state.output.length - 1),
    });
    if (this.state.output.length !== 0) {
      this.rafRef = requestAnimationFrame((thisTime) =>
        this.deleteEffect(thisTime, callback)
      );
    } else {
      return callback();
    }
  };

  render() {
    return (
      <TypingParagraph
        className={this.props.className}
        style={this.props.style}
      >
        {this.state.output}
      </TypingParagraph>
    );
  }
}

Typewriter.defaultProps = {
  typingSpeed: 50,
  // it needs to implement in delete function
  deletingSpeed: 32,
  pauseBeforeRestarting: 200,
  pauseBeforeDeleting: 1500,
  data: [],
  style: {},
  className: null,
};

Typewriter.propTypes = {
  typingSpeed: PropTypes.number,
  deletingSpeed: PropTypes.number,
  pauseBeforeRestarting: PropTypes.number,
  pauseBeforeDeleting: PropTypes.number,
  data: PropTypes.array,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default Typewriter;
