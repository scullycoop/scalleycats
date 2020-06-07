// Author: Gautam Kumar
import React from "react";

import {ReactComponent as UpArrow} from "../../assets/up-arrow.svg";

import "./scroll-to-top.styles.scss";

class ScrollToTop extends React.Component {
  constructor() {
    super();

    this.state = {
      isVisible: false
    };
  }

  componentDidMount() {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility() {
    if (window.pageYOffset > 300) {
      this.setState({
        isVisible: true
      });
    } else {
      this.setState({
        isVisible: false
      });
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    const {isVisible} = this.state;
    return (
      <div className="scroll-to-top">
        {isVisible && (
          <div onClick={() => this.scrollToTop()}>
            <UpArrow />
          </div>
        )}
      </div>
    );
  }
}

export default ScrollToTop;
