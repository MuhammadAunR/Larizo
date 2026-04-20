'use client'
import React, { createContext, useContext, useEffect, useState } from "react"

export const ContextProvider = createContext()
export const useCart = () => useContext(ContextProvider)


const CartContext = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([])

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    // useEffect(() => {
    //     const lenis = new Lenis({
    //   duration: 0.5,
    //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    //   smoothWheel: true,
    //   smoothTouch: false,
    //   touchMultiplier: 2,
    // });
    //     if (isCartOpen) {
    //         document.body.style.overflow = 'hidden';
    //         lenis?.stop();
    //     } else {
    //         document.body.style.overflow = 'auto';
    //         lenis?.start();
    //     }

    //     return () => {
    //         document.body.style.overflow = 'auto';
    //         lenis?.start();
    //     };
    // }, [isCartOpen]);

    const handleCartItems = (i) => {
        setCartItems(prev => {
            const exist = prev.find(item => item.id === i.id)

            if (exist) {
                return prev.map(item =>
                    item.id === i.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...i, quantity: 1 }]
        })
    }

    const handleSubTotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    return (
        <ContextProvider.Provider value={{ isCartOpen, toggleCart, handleCartItems, cartItems, handleSubTotal }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default CartContext
