'use client'
import { ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Hamburger from "@/components/Hamburger";
import { useCart } from '@/app/context/CartContext';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [yScroll, setYScroll] = useState(false)
    const { toggleCart } = useCart()

    const navOptions = [
        { option: "Home", path: "#home" },
        { option: "Collections", path: "#collections" },
        { option: "About", path: "#about" },
        { option: "Contact", path: "#contact" },
    ];

    const handleNavbarDropdown = () => {
        setIsOpen(!isOpen)
    }


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setYScroll(true)
            } else {
                setYScroll(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <nav className={`flex items-center justify-between py-5 px-5 md:px-10 fixed top-0 z-100 w-full transition-all ease-linear ${isOpen ? 'backdrop-blur-3xl' : 'backdrop-blur-none'} ${yScroll ? 'bg-black backdrop-blur-md h-20' : 'bg-black/10 h-25'}`}>
                <div className={``}>
                    <Link href={'/'} className='font-serif font-bold text-5xl cursor-pointer text-accent'>Larizo</Link>
                </div>
                <ul className='flex items-center gap-4 lg:gap-10'>
                    {navOptions.map(opt => {
                        return <li key={opt.path} className='max-lg:hidden group relative'>
                            <a href={opt.path} className='uppercase hover:text-accent transition-colors ease-linear cursor-pointer'>{opt.option}</a>
                            <span className='absolute h-px w-0 group-hover:w-full bg-accent transition-all ease-linear left-0 bottom-0'></span>
                        </li>
                    })}
                    <li onClick={toggleCart} className='hover:text-accent transition-colors ease-linear cursor-pointer'>
                        <ShoppingBag size={22} />
                    </li>
                    <li className='lg:hidden'>
                        <Hamburger
                            isOpen={isOpen}
                            onClick={handleNavbarDropdown} />
                    </li>
                </ul>
            </nav>
            <section className={`fixed z-100 top-21 bg-accent backdrop-blur-3xl w-full text-black transition-all ease-linear ${isOpen ? 'h-[calc(100%-85px)]' : 'h-0'} overflow-hidden`}>
                <ul className='flex flex-col items-center justify-center gap-3 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2'>
                    {navOptions.map(opt => {
                        return <li key={opt.path} className='relative group'>
                            <Link href={opt.path} onClick={handleNavbarDropdown} className='uppercase text-surface transition-colors ease-linear cursor-pointer'>{opt.option}</Link>
                            <span className='absolute h-px w-0 group-hover:w-full bg-surface transition-all ease-linear left-0 bottom-0'></span>
                        </li>
                    })}
                </ul>
            </section>
        </>
    )
}

export default Navbar
