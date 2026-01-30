import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import "./portfolio.scss"

const items = [
    {
        id: 1,
        title: "Business Website Design",
        img: "https://www.designer-daily.com/wp-content/uploads/2021/12/image1.jpeg",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio.",
    },
    {
        id: 2,
        title: "E-Commerce Website Design",
        img: "https://img.freepik.com/free-vector/flat-sale-landing-page-template-with-photo_23-2149028522.jpg?semt=ais_hybrid&w=740&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio.",
    },
    {
        id: 3,
        title: "Landing Page Design",
        img: "https://img.freepik.com/free-vector/flat-psychologist-landing-page-template_23-2150041435.jpg?semt=ais_hybrid&w=740&q=80",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio.",
    },
    {
        id: 4,
        title: "Portfolio Website Design",
        img: "https://repository-images.githubusercontent.com/1048456577/f755b5f5-44e9-430a-aaa3-89f00613bf9d",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam corrupti sapiente laborum cumque repellendus odio autem voluptate! Facilis cum id distinctio.",
    },
]

const Single = ({ item }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

    return (
        <section ref={ref}>
            <div className='container'>
                <div className='wrapper'>
                    <div className='imageContainer'>
                        <img src={item.img} alt={item.title} />
                    </div>
                    <motion.div 
                        className='textContainer' 
                        style={{ y }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });

    return (
        <div className='portfolio' ref={ref}>
            <div className='progress'>
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className='progressBar'></motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    )
}

export default Portfolio