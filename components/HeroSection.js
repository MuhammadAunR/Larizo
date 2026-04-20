'use client'
import React from 'react'
import { motion } from "framer-motion"
import Button from './ButtonUi'

const HeroSection = () => {
    return (
        <main className=''>

            <div className='w-full h-screen'>
                <img src="../larizoHeroSection.webp" alt="Hero" className='brightness-70 blur-sm h-full w-full' />
            </div>

            <header className='flex flex-col gap-5 items-center justify-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-9xl font-bold font-serif'>
                    Larizo
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className='text-center text-lg font-light'>Fragrances that define your presence. Crafted for lasting impressions, every scent reflects elegance, confidence, and individuality.
                </motion.p>

                <Button text={'Explore Collection'}/>
            </header>

        </main>
    )
}

export default HeroSection
