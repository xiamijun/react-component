// 轮播组件
import React, { Component } from 'react';
import './Carousel.css';

class Carousel extends Component {
    static defaultProps = {
        animationStep: 0.25
    }

    constructor(props) {
        super(props);
        this.state = {
            currentCarousel: 0,
            animationStep: 0
        };
        this.childrenLength = React.Children.count(props.children); // 子项长度

        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handlerCarousel = this.handlerCarousel.bind(this);
        this.handlerTransitionEnd = this.handlerTransitionEnd.bind(this);
        this.getDots = this.getDots.bind(this);
        this.handleDotClick = this.handleDotClick.bind(this);
    }

    componentDidMount() {
        this.setState({
            animationStep: this.props.animationStep
        });
    }

    // 更改当前循环到的轮播下标
    handlerCarousel(type) {
        const { currentCarousel } = this.state;
        let direction = 1;

        if (type === 'left') { // 向做运动 下标减1
            direction = -1;
        }

        if (currentCarousel % (this.childrenLength + 1) !== this.childrenLength && currentCarousel >= 0) {
            // 下标不为-1 或者最后一项的情况下正常 递增或者递减
            this.setState({
                currentCarousel: currentCarousel + direction,
                animationStep: this.props.animationStep
            });
        }
    }

    // 监听动画结束 在下标为边界时 并且切换的动画结束 取消动画 并调整轮播位置
    handlerTransitionEnd() {
        // 当在最末端的时候 取消动画 并将坐标重制为0
        const { currentCarousel } = this.state;

        if (currentCarousel % (this.childrenLength + 1) === this.childrenLength) {
            this.setState({
                animationStep: 0,
                currentCarousel: 0
            });
        } else if (currentCarousel < 0) {
            // 当在最前端的时候 取消动画 并将坐标重制为最大
            this.setState({
                animationStep: 0,
                currentCarousel: this.childrenLength - 1
            });
        }
    }

    handlePrev() {
        this.handlerCarousel('left');
    }

    handleNext() {
        this.handlerCarousel('right');
    }

    handleDotClick = index => () => {
        this.setState({
            currentCarousel: index,
            animationStep: this.props.animationStep
        });
    };

    getDots() {
        if (this.childrenLength === 1) {
            return null;
        }

        return React.Children.map(this.props.children, (child, index) => {
            const { currentCarousel } = this.state;

            return (
                <span
                    key={index}
                    className={`carousel-dot ${currentCarousel === index ? 'carousel-dot-active' : ''}`}
                    onClick={this.handleDotClick(index)}
                ></span>
            );
        });
    }

    render() {
        const { style } = this.props;
        const { animationStep, currentCarousel } = this.state;

        return (
            <div
                className="carousel"
                style={style}
            >
                {
                    this.childrenLength === 1 ? null : <span className="carousel-trigger carousel-triggerLeft" onClick={this.handlePrev} ></span>
                }
                {
                    this.childrenLength === 1 ? null : <span className="carousel-trigger carousel-triggerRight" onClick={this.handleNext}></span>
                }
                <div className="carousel-body" onTransitionEnd={this.handlerTransitionEnd} style={{
                    transition: `transform ${animationStep}s`,
                    width: `${(this.childrenLength + 2) * 100}%`,
                    transform: `translateX(${-100 / (this.childrenLength + 2) * (currentCarousel + 1)}%)`
                }}>
                    <div className="carousel-item" style={{ width: `${100 / (this.childrenLength + 2)}%` }} key={'strat'} >
                        {this.props.children[this.childrenLength - 1]}
                    </div>
                    {
                        this.props.children.map((item, index) => <div className="carousel-item" style={{ width: `${100 / (this.childrenLength + 2)}%` }} key={index} >{item}</div>)
                    }
                    <div className="carousel-item" style={{ width: `${100 / (this.childrenLength + 2)}%` }} key={'end'} >
                        {this.props.children[0]}
                    </div>
                </div>
                <div className="carousel-dots">
                    <div>{this.getDots()}</div>
                </div>
            </div>
        );
    }
}

export default Carousel;
