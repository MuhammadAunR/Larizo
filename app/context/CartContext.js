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

    const handleCheckout = () => {
        setCartItems([])
    }

    const handleItemInc = (i) => {
        setCartItems(prev => {
            const exist = prev.find(item => item.id === i.id)
            if (exist) {
                return prev.map(item =>
                    item.id === i.id ? { ...item, quantity: item.quantity + 1 } : item
                )
            }
        })

    }
    const handleItemDec = (i) => {
        setCartItems(prev => {
            const exist = prev.find(item => item.id === i.id)
            if (exist) {
                return prev.map(item =>
                    item.id === i.id ? { ...item, quantity: item.quantity - 1 } : item
                )
            }
        })
    }

    const removeCartItem = (i) => {
        setCartItems(prev => {
            return prev.filter(item => item.id !== i.id)
        })
    }

    const handleSubTotal = cartItems.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0)

    return (
        <ContextProvider.Provider value={{
            isCartOpen, toggleCart, handleCartItems, cartItems, handleSubTotal, removeCartItem,
            handleItemDec, handleItemInc, handleCheckout
        }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default CartContext
