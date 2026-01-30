import React from 'react'
import "./navbar.scss"
import { motion } from "framer-motion"
import Sidebar from './sidebar/Sidebar'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Sidebar/>
            <div className='wrapper'>
                <motion.span 
                    initial={{ opacity: 0, scale: 0.5 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.5 }} 
                    className='logotext'
                >
                    Lama Dev
                </motion.span>
            
                <motion.div 
                    className='social'
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <motion.a 
                        href="#"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src="/facebook.png" alt="facebook" />
                    </motion.a>

                    <motion.a 
                        href="#"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src="/instagram.png" alt="instagram" />
                    </motion.a>

                    <motion.a 
                        href="#"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src="/youtube.png" alt="youtube" />
                    </motion.a>

                    <motion.a 
                        href="#"
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src="/dribbble.png" alt="dribbble" />
                    </motion.a>
                </motion.div>
            </div>
        </div>
    )
}

export default Navbar