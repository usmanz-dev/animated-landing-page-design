import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion';

// Text animation variants
const textVariants = {
    initial: { x: -500, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: { duration: 1, staggerChildren: 0.1 },
    },
};

const sliderVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: '-220%',
        transition: {
            repeat: Infinity,
            repeatType: "mirror",
            duration: 120,
        },
    },
};

// Hero image animation variants
const imgVariants = {
    initial: { x: 500, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
};

const Hero = () => {
    return (
        <div className='hero'>
            {/* Animated Gradient Background */}
            <div className="gradientBackground">
                <div className="gradientCircle circle1"></div>
                <div className="gradientCircle circle2"></div>
                <div className="gradientCircle circle3"></div>
            </div>

            <div className='wrapper'>
                <motion.div
                    className='textContainer'
                    variants={textVariants}
                    initial="initial"
                    animate="animate"
                >
                    <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>

                    <motion.h1 variants={textVariants}>
                        Web developer and UI designer
                    </motion.h1>

                    <motion.p variants={textVariants}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos dolor tenetur incidunt atque facilis sunt, laudantium eum accusamus architecto quo quibusdam labore tempora odio harum dolorem.
                    </motion.p>

                    <motion.div className='buttons' variants={textVariants}>
                        <motion.a
                            href="#Portfolio"
                            className="btnPrimary"
                            variants={textVariants}
                            whileHover={{ backgroundColor: "#ffffff", color: "#0c0c1d" }}
                            whileTap={{ scale: 0.97 }}
                            style={{ textDecoration: 'none' }}
                        >
                            See the Latest Works
                        </motion.a>

                        <motion.a
                            href="#Contact"
                            className="btnSecondary"
                            variants={textVariants}
                            whileHover={{ backgroundColor: "transparent", color: "#ffffff" }}
                            whileTap={{ scale: 0.97 }}
                            style={{ textDecoration: 'none' }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    {/* Scroll icon with bounce animation + hover + smooth scroll */}
                    <motion.a
                        href="#Services"
                        style={{ display: "inline-block" }}
  
                    >
                        <motion.img
                            src="/scroll.png"
                            alt="Go to Services Page"
                            initial={{ y: 0, opacity: 1 }}
                            animate={{ y: [0, 10, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            style={{ cursor: "pointer" }}
                        />
                    </motion.a>
                </motion.div>
            </div>

            <motion.div className='slidingTextContainer' variants={sliderVariants} initial="initial" animate="animate">
                Writer Content Creator Influencer
            </motion.div>

            <motion.div
                className='imageContainer'
                variants={imgVariants}
                initial="initial"
                animate="animate"
            >
                <motion.img src="/hero.png" alt="" variants={imgVariants} />
            </motion.div>
        </div>
    )
}

export default Hero;