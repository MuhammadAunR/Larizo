import React from 'react'

const HeroSection = () => {
    return (
        <main className=''>

            <div className='w-full h-screen'>
                <img src="../larizoHeroSection.webp" alt="Hero" className='brightness-70 blur-sm h-full w-full' />
            </div>

            <header className='flex flex-col gap-5 items-center justify-center absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                <h1 className='text-9xl font-bold font-serif'>Larizo</h1>
                <p className='text-center text-lg font-light'>Fragrances that define your presence. Crafted for lasting impressions, every scent reflects elegance, confidence, and individuality.</p>

                <button className='bg-accent text-black px-7 py-4 text-xl font-light uppercase cursor-pointer relative z-20 group hover:text-foreground transition-colors ease-linear duration-700 border-2 border-surface hover:border-accent'>Explore Collection
                    <span className='bg-surface absolute w-0 h-full left-0 top-0 group-hover:w-full transition-all ease-linear duration-300 -z-10'></span>
                </button>
            </header>

        </main>
    )
}

export default HeroSection
