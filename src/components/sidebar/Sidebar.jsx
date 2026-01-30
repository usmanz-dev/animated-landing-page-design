import React, { useState, useRef, useEffect } from 'react'
import "./sidebar.scss"
import Links from './links/Links'
import ToggleButton from './toggleButton/ToggleButton'
import { motion } from 'framer-motion'

const Sidebar = () => {

    const [open, setOpen] = useState(false)
    const sidebarRef = useRef(null)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        },
    }

    // 🔥 Close sidebar on outside click
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (open && sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [open])

    return (
        <motion.div
            className='sidebar'
            ref={sidebarRef}
            animate={open ? "open" : "closed"}
        >
            <motion.div className='bg' variants={variants}>
                {/* 🔥 pass setOpen */}
                <Links setOpen={setOpen} />
            </motion.div>

            <ToggleButton setOpen={setOpen} />
        </motion.div>
    )
}

export default Sidebar
