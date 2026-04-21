'use client'
import React from 'react'
import Button from './ButtonUi'
import { motion } from "framer-motion"

const FooterSection = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
    }

    return (
        <main id='contact' className='bg-surface h-fit rounded-2xl my-6 mx-2 md:m-12'>

            <section className='flex items-center justify-between gap-5 px-5 md:px-20 py-10 max-lg:flex-col max-lg:items-start'>
                <div>
                    <h6 className='text-lg'>We send great email</h6>
                    <div className='py-5 flex items-center gap-5 flex-wrap'>
                        <input type="email" placeholder='Enter you email' className='bg-foreground text-surface px-5 py-2 md:w-100 outline-none' />
                        <Button text={'Subscribe'} classes='px-7 py-2' />
                    </div>
                </div>
                <div className='flex items-center gap-10'>

                    <div className='flex flex-col gap-7'>
                        <h6 className='text-2xl font-serif'>Company</h6>
                        <ul className='flex flex-col gap-1 font-light'>
                            <a href='#home' className='hover:text-accent transition-colors ease-linear'>Home</a>
                            <a href='#collections' className='hover:text-accent transition-colors ease-linear'>Collection</a>
                            <a href='#about' className='hover:text-accent transition-colors ease-linear'>About</a>
                            <a href='#contact' className='hover:text-accent transition-colors ease-linear'>Contact</a>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <h6 className='text-2xl font-serif'>Social</h6>
                        <ul className='flex flex-col gap-1 font-light'>
                            <li className='hover:text-accent transition-colors ease-linear cursor-pointer'>TikTok</li>
                            <li className='hover:text-accent transition-colors ease-linear cursor-pointer'>Instagram</li>
                            <li className='hover:text-accent transition-colors ease-linear cursor-pointer'>Facebook</li>
                            <li className='hover:text-accent transition-colors ease-linear cursor-pointer'>Youtube</li>
                        </ul>
                    </div>

                </div>
            </section>

            <motion.section
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
                className='flex items-center justify-center text-accent text-7xl sm:text-8xl md:text-9xl xl:text-[22rem]'
            >
                {['L', 'A', 'R', 'I', 'Z', 'O'].map(char => (
                    <motion.span
                        variants={item}
                        key={char}
                        className='text-center font-bold font-serif'
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.section>

            <div className='w-full bg-foreground rounded-b-2xl text-black text-center py-3 text-sm'>
                &copy; {new Date().getFullYear()} <span className='font-serif text-lg font-bold'>Larizo</span>. Crafted with passion for timeless fragrances.
            </div>
        </main>
    )
}

export default FooterSection
