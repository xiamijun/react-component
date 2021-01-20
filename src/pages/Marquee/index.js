import React from 'react';
import Marquee from '../../components/Marquee';
import './index.css';

export default function MarqueePage() {
  return (
    <span className="Marquee-page">
      <Marquee
          duringTime={4000}
          isNeedUpdate={1}
          data="测试很多测试很多测试很多测试很多测试很多测试很多测试很多"
      />
    </span>
  )
}