import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'

import SearchBar from '../SearchBar/SearchBar'

import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container">
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <motion.h1
                            initial={{ y: "2rem", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 2, type: "spring" }}
                        >
                            Discover
                            <br />
                            Most Suitable
                            <br />
                            Property
                        </motion.h1>
                    </div>
                    <div className="flexColStart hero-description">
                        <span className='secondaryText'>Discover beautiful homes suited to your lifestyle</span>
                        <span className='secondaryText'>Forget all difficulties in finding a perfect place to live</span>
                    </div>
                    <SearchBar />
                    <div className="stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={8800} end={9000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1950} end={2000} duration={4} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>
                        <div className="flexColStart stat">
                            <span>
                                <CountUp end={28} />
                                <span>+</span>
                            </span>
                            <span className='secondaryText'>Award Winning</span>
                        </div>
                    </div>
                </div>
                <div className="flexCenter hero-right">
                    <motion.div 
                        className="image-container"
                        initial={{ x: "7rem", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 2, type: "spring" }}
                    >
                        <img src="./hero-image.png" alt="Hero Image" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Hero