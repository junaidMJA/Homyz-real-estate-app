import React, { useState } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { PuffLoader } from 'react-spinners';

import 'swiper/css'
import './Residencies.css'
import { sliderSettings } from '../../utils/common'

import PropertyCard from '../PropertyCard/PropertyCard';
import useProperties from '../../hooks/useProperties';

const Residencies = () => {

    const { data, isError, isLoading } = useProperties()

    if (isError) {
        return (
            <div className="wrapper">
                <span>Error while fetching data.</span>
            </div>
        )
    }

    if (isLoading) {
        return (
            <div className="wrapper flexCenter" style={{ height: "60vh" }}>
                <PuffLoader
                    height="80"
                    width="80"
                    radius={1}
                    color='#4066FF'
                    aria-label='puff-loading'
                />
            </div>
        )
    }

    return (
        <section className="r-wrapper">
            <div className="paddings innerWidth r-container">
                <div className="r-head flexColStart">
                    <span className='orangeText'>Best Choices</span>
                    <span className='primaryText'>Popular Residencies</span>
                </div>
                <Swiper {...sliderSettings} >
                    <SliderButtons />
                    {data.slice(0, 8).map((card, i) => (
                            <SwiperSlide key={i}>
                                <PropertyCard card={card} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section>
    )
}

export default Residencies


const SliderButtons = () => {
    const swiper = useSwiper();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on('slideChange', handleSlideChange);
  
    return (
        <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()} disabled={isBeginning}>
                <FaArrowLeft />
            </button>
            <button onClick={() => swiper.slideNext()} disabled={isEnd}>
                <FaArrowRight />
            </button>
        </div>
    );
};