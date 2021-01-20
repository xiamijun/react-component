import React from 'react';
import './Marquee.css';

export default class Marquee extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPos: '100%'
    }
    this.containerRef = React.createRef();
    this.broadcastRef = React.createRef();
    this.isTimerRunning = false;
    this.timer = null;
  }
  
  componentDidMount() {
    this.startAnimated();
  }

  startAnimated = () => {
    const container = this.containerRef.current;
    const broadcast = this.broadcastRef.current;
    const containerWidth = container.scrollWidth;
    const broadcastWidth = broadcast.scrollWidth;
    const { duringTime = 3000, isLoop = true, callbackFn } = this.props;
    const addTime = (parseInt(((broadcastWidth * duringTime / 1000) / containerWidth) * 10, 10) * 100) || 0;
    const showTime = addTime + duringTime;

    if (this.isTimerRunning) {
      return;
    }
    this.isTimerRunning = true;
    this.setState({
      leftPos: -broadcast.scrollWidth,
      transition: `left ${showTime}ms linear`
    });
    this.timer = setTimeout(() => {
      this.setState({
        leftPos: '100%',
        transition: 'none'
      });
      this.isTimerRunning = false;
      if (isLoop) {
        this.startAnimated();
      } else if (callbackFn) {
        callbackFn();
      }
    }, showTime);
  }

  render() {
    const { leftPos, transition } = this.state;
    const { data, otherStyle } = this.props;

    return (
        <div className="Marquee" ref={this.containerRef}>
          <div
            className="Marquee-broadcast"
            ref={this.broadcastRef}
            style={{
              left: leftPos,
              transition,
              ...otherStyle
            }}
          >
            {data}
          </div>
        </div>
    );
  }
}
