'use client'
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import HamburgerComp from "@/components/HamburgerComp";
import { useCart } from '@/app/context/CartContext';
import { motion } from 'framer-motion';
import { useNavContext } from '@/app/context/NavbarContext';

const Navbar = () => {

    const [yScroll, setYScroll] = useState(false)
    const [selectedTab, setSelectedTab] = useState('#home')
    const { toggleCart, cartItems } = useCart()
    const { toggleNavbar, isOpen } = useNavContext()

    const navOptions = [
        { option: "Home", path: "#home" },
        { option: "Collections", path: "#collections" },
        { option: "About", path: "#about" },
        { option: "Contact", path: "#contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setYScroll(true)
            } else {
                setYScroll(false)
            }

            const sections = ['home', 'collections', 'about', 'contact']
            for (const id of sections) {
                const el = document.getElementById(id)
                if (!el) continue

                const rect = el.getBoundingClientRect()
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    setSelectedTab(`#${id}`)
                    break
                }
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`flex items-center justify-between py-5 px-5 md:px-10 fixed top-0 z-100 w-full transition-all ease-linear ${isOpen ? 'backdrop-blur-3xl' : 'backdrop-blur-none'} ${yScroll ? 'bg-black backdrop-blur-md h-20' : 'bg-black/10 h-25'}`}>
                <div>
                    <Link href={'/'} className='font-serif font-bold text-5xl cursor-pointer text-accent'>Larizo</Link>
                </div>
                <ul className='flex items-center gap-4 lg:gap-10'>
                    {navOptions.map(opt => (
                        <motion.li
                            key={opt.path}
                            initial={false}
                            className='max-lg:hidden relative cursor-pointer'
                            onClick={() => setSelectedTab(opt.path)}
                        >
                            <a href={opt.path} className={`uppercase transition-colors ease-linear cursor-pointer ${selectedTab === opt.path ? 'text-accent' : 'hover:text-accent'}`}>
                                {opt.option}
                            </a>
                            {selectedTab === opt.path && (
                                <motion.span
                                    layoutId="underline"
                                    className='absolute -bottom-1 left-0 right-0 h-px bg-accent'
                                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                />
                            )}
                        </motion.li>
                    ))}
                    <li onClick={toggleCart} className='hover:text-accent transition-colors ease-linear cursor-pointer relative'>
                        <ShoppingBag size={22} />
                        {cartItems.length > 0 &&
                            <span className={`absolute w-5 h-5 rounded-full text-xs -top-2 -left-2 flex items-center justify-center transition-colors ease-linear duration-300 ${isOpen ? 'bg-black text-foreground' : 'bg-accent text-black'}`}>
                                {cartItems.length}
                            </span>
                        }
                    </li>
                    <li className='lg:hidden'>
                        <HamburgerComp isOpen={isOpen} onClick={toggleNavbar} />
                    </li>
                </ul>
            </nav>

        </>
    )
}

export default Navbar