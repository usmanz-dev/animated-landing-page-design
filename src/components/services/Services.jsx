import React, { useRef } from 'react'
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial: {
        x: -500,
        // y: 100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        // y: 0,
        transition: {
            duration: 1,

        }
    }
}

const Services = () => {

    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });

    return (
        <motion.div
            className='services'
            variants={variants}
            initial="initial"
            ref={ref}
            animate={isInView ? "animate" : "initial"}
        >
            <motion.div className='textContainer' variants={variants}>
                <p>I focus on helping your brand grow
                    <br />
                    and move forward
                </p>
                <hr />
            </motion.div>
            <motion.div className='titleContainer' variants={variants}>
                <motion.div className='title'>
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas</h1>
                </motion.div>
                <motion.div className='title'>
                    <h1><motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Business.</h1>
                    <button>What We Do?</button>
                </motion.div>
            </motion.div>
            <motion.div className='listContainer' variants={variants}>
                <motion.div className='box ' whileHover={{ background: "lightgray", color: "black"  }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio. Aspernatur ipsam facilis minima exercitationem quam pariatur veritatis.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio. Aspernatur ipsam facilis minima exercitationem quam pariatur veritatis.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio. Aspernatur ipsam facilis minima exercitationem quam pariatur veritatis.</p>
                    <button>Go</button>
                </motion.div>
                <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio. Aspernatur ipsam facilis minima exercitationem quam pariatur veritatis.</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services