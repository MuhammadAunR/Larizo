import Image from 'next/image'
import React from 'react'

const AboutSection = () => {
    return (
        <main id='about' className='h-fit flex items-center justify-between gap-7 mx-5 lg:mx-10 py-14 max-lg:flex-col'>
            <div className='flex flex-col items-start gap-10'>
                <h4 className='text-4xl md:text-5xl font-semibold font-serif'>About Us</h4>
                <div className='flex flex-col items-start gap-5'>
                    <h2 className='text-4xl'>At <span className='font-serif font-bold text-accent'>Larizo</span>, nature is not just an inspiration — it is our language.</h2>
                    <p className='text-gray-400'>
                        The soft blush of blooming petals, the deep embrace of aged wood, the crisp
                        clarity of morning air — each element lives within our fragrances, breathing
                        life into every bottle. Our artisans move through the world with open senses,
                        capturing fleeting moments before they vanish, then distilling them into scents
                        that carry the soul of the natural world.
                    </p>
                    <p className='text-xl'>Every fragrance we craft is a story told without words.</p>
                </div>
            </div>
            <div className="relative w-full aspect-video lg:w-300 lg:aspect-auto lg:h-130">
                <Image
                    src='/about-section.webp'
                    alt='About Section Photo'
                    fill
                    loading='lazy'
                    sizes='240px'
                    className='object-cover rounded-2xl'
                />
            </div>
        </main>
    )
}

export default AboutSection
