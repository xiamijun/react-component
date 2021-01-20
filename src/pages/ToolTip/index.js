import React from 'react';
import ToolTip from '../../components/ToolTip';
import './index.css';

export default function ToolTipPage() {
  return (
    <div className="ToolTipPage-title">
        把直播间推荐给潜在兴趣水友
        <ToolTip style={{ marginLeft: '5px' }} direction="down">
            <span className="ToolTipPage-tipText">
                将直播间展现给推荐流中更多潜在兴趣用户，提升直播间人气
            </span>
        </ToolTip>
    </div>
  )
}