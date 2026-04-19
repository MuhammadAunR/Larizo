'use client'
import { Menu, ShoppingBag } from 'lucide-react';
import Link from 'next/link'
import { useState } from 'react';
import Hamburger from "@/components/Hamburger";
import { useCart } from '@/app/context/CartContext';


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const { toggleCart } = useCart()

    const navOptions = [
        { option: "Home", path: "/" },
        { option: "Collections", path: "/collections" },
        { option: "About", path: "/about" },
        { option: "Contact", path: "/contact" },
    ];

    const handleNavbarDropdown = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className={`flex items-center justify-between py-5 px-5 md:px-10 fixed top-0 z-100 w-full ${isOpen ? 'backdrop-blur-3xl' : 'backdrop-blur-none'}`}>
                <div className={``}>
                    <Link href={'/'} className='font-serif font-bold text-5xl cursor-pointer'>Larizo</Link>
                </div>
                <ul className='flex items-center gap-4 lg:gap-10'>
                    {navOptions.map(opt => {
                        return <li key={opt.path} className='max-lg:hidden group relative'>
                            <Link href={opt.path} className='uppercase hover:text-accent transition-colors ease-linear cursor-pointer'>{opt.option}</Link>
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
            <section className={`absolute z-100 top-21 bg-accent backdrop-blur-3xl w-full text-black transition-all ease-linear ${isOpen ? 'h-[calc(100%-85px)]' : 'h-px'} overflow-hidden`}>
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
