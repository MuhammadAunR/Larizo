'use client'
import React from 'react'
import CardUI from './CardUI';
import { products } from './Assets';
import Image from 'next/image';
import { motion } from "framer-motion"


const Collection = () => {
    const collections = [
        { name: "Luxury Spice", image: "/luxury-extracted.webp" },
        { name: "Citrus Burst", image: "/citrus-extracted.webp" },
        { name: "Floral Essence", image: "/flower-extracted.webp" },
        { name: "Wooden Bark", image: "/wooden-extracted.webp" },
        { name: "Fresh Mint", image: "/mint-extracted.webp" },
    ];

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
        <main className='w-10/12 mx-auto py-10'>

            <section>
                <h2 className='text-4xl md:text-5xl font-semibold font-serif pt-20'>Scent Families</h2>
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='py-7 flex items-center justify-center gap-3 flex-wrap'>
                    {collections.map(collection => {
                        return <motion.div key={collection.name} variants={item} className='relative w-60 h-80 overflow-hidden group'>
                            <h4 className='bg-black/50 backdrop-blur-xs w-full p-2 transition-transform ease-linear'>{collection.name}</h4>
                            <div className="absolute inset-0 -z-10">
                                <Image
                                    src={collection.image}
                                    alt={collection.name}
                                    fill
                                    sizes="240px"
                                    loading='lazy'
                                    className='object-cover group-hover:scale-110 transition-transform ease-linear'
                                />
                            </div>
                        </motion.div>
                    })}
                </motion.div>
            </section>

            <section id='collections' className='py-10'>
                <h2 className='text-4xl md:text-5xl font-semibold font-serif pt-20'>Our Collections</h2>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='flex items-center justify-center gap-3 flex-wrap pt-10'>
                    {products.map(prod => {
                        return <motion.span key={prod.id} variants={item}>
                            <CardUI product={prod} />
                        </motion.span>
                    })}
                </motion.div>
            </section>
        </main>
    )
}

export default Collection
