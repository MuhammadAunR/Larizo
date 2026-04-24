import React from 'react'
import { motion } from 'framer-motion'

const Button = ({ addFramer = 'yes', text, classes = 'px-7 py-4' }) => {
    const framerProps = addFramer === 'yes' ? {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        viewport: { once: true },
        whileTap: { scale: 0.95 }
    } : {}
    return (
        <motion.button
            {...framerProps}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileTap={{ scale: 0.95 }}
            className={`bg-accent text-black ${classes} text-xl font-light uppercase cursor-pointer relative z-20 group hover:text-foreground transition-colors ease-linear duration-700 border-2 border-surface hover:border-accent`}>{text}
            <span className='bg-surface absolute w-0 h-full left-0 top-0 group-hover:w-full transition-all ease-linear duration-300 -z-10'></span>
        </motion.button>
    )
}

export default Button
