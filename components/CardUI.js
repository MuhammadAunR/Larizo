'use client'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { useCart } from '@/app/context/CartContext'


const CardUI = ({ product }) => {
    const { handleCartItems } = useCart()
    return (
        <div className='w-75 h-100 relative group/card overflow-hidden'>
            <div className="relative w-full h-full">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                    loading='lazy'
                    className='object-cover group-hover/card:brightness-50 transition-all ease-linear duration-500'
                />
            </div>
            <div className={`absolute top-2 left-2 border-2 px-3 py-1 ${product.gender === 'Men' ? 'bg-blue-950/20 text-sm text-blue-950 border-blue-950/50' : product.gender === 'Unisex' ? 'bg-neutral-500/20 text-sm text-neutral-400 border-neutral-500/50' : 'bg-pink-950/20 text-sm text-pink-950 border-pink-950/50'}`}>
                {product.gender}
            </div>
            <div className='flex flex-col gap-1 bg-black/50 backdrop-blur-lg rounded-t-3xl w-full min-h-fit p-3 absolute -bottom-28 group-hover/card:bottom-0 transition-all ease-linear duration-300 cursor-pointer'>

                <div className='flex items-center justify-between py-3'>
                    <h3 title={product.name} className='font-serif text-2xl font-semibold truncate max-w-[60%]'>
                        {product.name}
                    </h3>
                    <span className='text-xs text-foreground/60'>{product.type}</span>
                </div>

                <div className='flex items-center justify-between'>
                    <h5 className='text-sm'>
                        By <span className='font-serif text-lg'>{product.brand}</span>
                    </h5>
                    <span className='text-sm text-foreground/60'>{product.size}</span>
                </div>

                <div className='flex items-center justify-between mt-3 pt-3 border-t border-white/10'>
                    <span className='font-bold text-accent text-lg'>
                        PKR {product.price.toLocaleString()}
                    </span>

                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCartItems(product)}
                        className='bg-accent px-7 py-2 text-black flex items-center gap-1 relative overflow-hidden group/btn transition-all ease-linear'>
                        <span className='absolute -left-10 opacity-0 group-hover/btn:left-3 group-hover/btn:opacity-100 transition-all ease-linear duration-300'>
                            <ShoppingCart size={20} />
                        </span>
                        <span className='group-hover/btn:translate-x-4 transition-all ease-linear duration-300'>
                            Add to Cart
                        </span>
                    </motion.button>
                </div>

            </div>
        </div>
    )
}

export default CardUI
