import React from 'react';
import Carousel from '../../components/Carousel';
import './index.css';

export default function CarouselPage() {
  const creativeList = [{
    url: 'https://sta-op-test.douyucdn.cn/adxdsp/2020/09/11/b9adaa3a7910bd690b4c2c8492b20fbc.jpg'
  }, {
    url: 'https://sta-op-test.douyucdn.cn/adxdsp/2020/08/24/302cbbb248ceebedb4989619d9766237.png'
  }]

  return (
    <Carousel style={{ width: 520, height: 520, margin: '0 auto' }} isLoop={true}>
        {
            creativeList.map((item, idx) => (
                <img src={item.url} className="CarouselPage-galleryItem" key={idx} />
            ))
        }
    </Carousel>
  )
}