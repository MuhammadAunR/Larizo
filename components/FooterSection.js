'use client'
import React from 'react'
import Button from './ButtonUi'

const FooterSection = () => {
    return (
        <main className='bg-surface h-fit rounded-2xl my-6 mx-2 md:m-12'>

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
                            <li>Home</li>
                            <li>Collection</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-7'>
                        <h6 className='text-2xl font-serif'>Social</h6>
                        <ul className='flex flex-col gap-1 font-light'>
                            <li>Tiktok</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Youtube</li>
                        </ul>
                    </div>

                </div>
            </section>

            <section className='flex items-center justify-center text-accent text-6xl sm:text-8xl md:text-9xl xl:text-[22rem]'>
                <span className='text-center font-bold font-serif'>L</span>
                <span className='text-center font-bold font-serif'>A</span>
                <span className='text-center font-bold font-serif'>R</span>
                <span className='text-center font-bold font-serif'>I</span>
                <span className='text-center font-bold font-serif'>Z</span>
                <span className='text-center font-bold font-serif'>O</span>
            </section>

            <div className='w-full bg-foreground rounded-b-2xl text-black text-center py-3 text-sm'>
                &copy; {new Date().getFullYear()} <span className='font-serif text-lg font-bold'>Larizo</span>. Crafted with passion for timeless fragrances.
            </div>
        </main>
    )
}

export default FooterSection
