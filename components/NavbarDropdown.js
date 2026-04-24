'use client'
import { useCart } from '@/app/context/CartContext';
import { useNavContext } from '@/app/context/NavbarContext';
import HamburgerComp from "@/components/HamburgerComp";
import { Hamburger, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect } from 'react'

const NavbarDropdown = () => {

    const { isOpen, toggleNavbar } = useNavContext()
    const { toggleCart, cartItems } = useCart()

    const navOptions = [
        { option: "Home", path: "#home" },
        { option: "Collections", path: "#collections" },
        { option: "About", path: "#about" },
        { option: "Contact", path: "#contact" },
    ];

    useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
                window.lenis?.stop();
            } else {
                document.body.style.overflow = 'auto';
                window.lenis?.start();
            }
    
            return () => {
                document.body.style.overflow = 'auto';
                window.lenis?.start();
            };
        }, [isOpen]);

    return (
        <section className={`fixed z-100 h-screen bg-surface w-full text-white transition-all ease-linear $ ${isOpen ? 'translate-y-0' : 'translate-y-full'} overflow-hidden`}>


            <ul className='flex items-center justify-between px-5 md:px-10 gap-4 lg:gap-10 py-5'>

                <div>
                    <Link href={'/'} className='font-serif font-bold text-5xl cursor-pointer text-foreground'>Larizo</Link>
                </div>
                <div className='flex items-center gap-4'>
                    <li onClick={toggleCart} className='hover:text-accent  transition-colors ease-linear cursor-pointer relative'>
                        <ShoppingBag size={22} />
                        {cartItems.length > 0 &&
                            <span className='absolute w-5 h-5 rounded-full text-xs -top-2 -left-2 bg-accent flex items-center justify-center text-black'>{cartItems.length}</span>
                        }
                    </li>
                    <li className='lg:hidden'>
                        <HamburgerComp isOpen={isOpen} onClick={toggleNavbar} />
                    </li>
                </div>
            </ul>

            <ul className='flex flex-col items-center justify-center gap-3 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                {navOptions.map(opt => (
                    <li key={opt.path} className='relative group'>
                        <a href={opt.path} onClick={toggleNavbar} className='uppercase text-foreground hover:text-accent transition-colors ease-linear cursor-pointer text-2xl'>{opt.option}</a>
                        <span className='absolute h-px w-0 group-hover:w-full bg-accent transition-all ease-linear left-0 bottom-0'></span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default NavbarDropdown
