'use client'
import { useCart } from '@/app/context/CartContext'
import { X } from 'lucide-react'
import React from 'react'


const Cart = () => {

    const { toggleCart, isCartOpen } = useCart()

    return (
        <main className='w-full flex'>

            <section onClick={toggleCart} className={`bg-gray-600/50 backdrop-blur-lg h-screen fixed top-0 z-200 w-[calc(100%-400px)] ${isCartOpen ? 'block' : 'hidden'}`}>
            </section>

            <aside className={`bg-surface h-screen w-100 fixed top-0 right-0 z-200 transition-all ease-linear ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                <div className='flex items-center justify-between px-5 py-6.5 border-b-2 border-accent'>
                    <h3 className='text-2xl'>Your Cart</h3>
                    <span onClick={toggleCart}>
                        <X size={28} className='cursor-pointer hover:rotate-180 hover:text-accent transition-all ease-linear' />
                    </span>
                </div>
                <section>

                </section>
                <div>

                </div>

            </aside>
        </main>
    )
}

export default Cart
