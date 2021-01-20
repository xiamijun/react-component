// toolTip提示

import React from 'react';
import './ToolTip.css';

class ToolTip extends React.Component {
    render() {
        const { children, style, direction = 'up' } = this.props;

        return (
            <div className={direction === 'up' ? 'ToolTip' : 'ToolTipDown'} style={style}>
                <div className={direction === 'up' ? 'ToolTip-icon' : 'ToolTipDown-icon'}></div>
                <div className={direction === 'up' ? 'ToolTip-content' : 'ToolTipDown-content'}>{ children }</div>
            </div>
        );
    }
}

export default ToolTip;
