'use client'

import React, { createContext, useContext, useState } from "react"

export const ContextProvider = createContext()
export const useCart = () => useContext(ContextProvider)


const CartContext = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }
    return (
        <ContextProvider.Provider value={{ isCartOpen, toggleCart }}>
            {children}
        </ContextProvider.Provider>
    )
}

export default CartContext
