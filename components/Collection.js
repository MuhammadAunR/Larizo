import React from 'react'
import CardUI from './CardUI';
import { products } from './Assets';

const Collection = () => {
    const collections = [
        { name: "Luxury Spice", image: "/luxury-extracted.webp" },
        { name: "Citrus Burst", image: "/citrus-extracted.webp" },
        { name: "Floral Essence", image: "/flower-extracted.webp" },
        { name: "Wooden Bark", image: "/wooden-extracted.webp" },
        { name: "Fresh Mint", image: "/mint-extracted.webp" },
    ];

    return (
        <main className='w-10/12 mx-auto py-10'>

            <section>
                <h2 className='text-5xl font-semibold font-serif pt-20'>Scent Families</h2>
                <div className='py-7 flex items-center justify-center gap-3'>
                    {collections.map(collection => {
                        return <div key={collection.name} className='relative w-60 h-80 overflow-hidden group'>
                            <h4 className='bg-black/50 backdrop-blur-xs w-full p-2 transition-transform ease-linear'>{collection.name}</h4>
                            <img src={collection.image} alt={collection.name} className='w-60 h-80 object-cover absolute top-0 -z-10 group-hover:scale-110 transition-transform ease-linear' />
                        </div>
                    })}
                </div>
            </section>

            <section className='py-10'>
                <h2 className='text-5xl font-semibold font-serif pt-20'>Our Collections</h2>

                <div className='flex items-center justify-center gap-3 flex-wrap pt-10'>
                    {products.map(prod => {
                        return <CardUI key={prod.id} product={prod} />
                    })}
                </div>
            </section>
        </main>
    )
}

export default Collection
