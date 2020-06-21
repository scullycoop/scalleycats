// Author: Gautam Kumar
import React from "react";

import {ReactComponent as UpArrow} from "../../assets/up-arrow.svg";

import "./scroll-to-top.styles.scss";

interface IScrollToTopProps {  
} 

interface IScrollToTopState {
  isVisible: Boolean
}

class ScrollToTop extends React.Component<IScrollToTopProps, IScrollToTopState> {
  constructor(props: IScrollToTopProps) {
    super(props);

    this.state = {
      isVisible: false
    };
  }

  componentDidMount(): void {
    var scrollComponent = this;
    document.addEventListener("scroll", function(e) {
      scrollComponent.toggleVisibility();
    });
  }

  toggleVisibility(): void {
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

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render(): JSX.Element {
    const {isVisible}: {isVisible: Boolean} = this.state;
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
