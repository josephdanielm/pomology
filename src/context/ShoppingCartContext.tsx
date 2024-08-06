import { createContext, ReactNode, useContext, useState } from "react";
import { ShoppingCart } from "../components/ShoppingCart";
import { Link } from "react-router-dom";

type ShoppingCartProviderProps = {
    children: ReactNode
}

type ShoppingCartContext = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (name: string) => number
    increaseCartQuantity: (name: string) => void
    decreaseCartQuantity: (name: string) => void
    removeFromCart: (name: string) => void
    cartQuantity: number
    cartItems: CartItem[]
}

type CartItem = {
    name: string
    quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity, 0
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    function getItemQuantity(name: string) {
        return cartItems.find(item => item.name === name)?.quantity || 0
    }

    function increaseCartQuantity(name: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.name === name) == null) {
                return [...currItems, {name, quantity: 1}]
            } else {
                return currItems.map(item => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function decreaseCartQuantity(name: string) {
        setCartItems(currItems => {
            if (currItems.find(item => item.name === name)?.quantity === 1) {
                return currItems.filter(item => item.name !== name)
            } else {
                return currItems.map(item => {
                    if (item.name === name) {
                        return { ...item, quantity: item.quantity - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(name: string) {
        setCartItems(currItems => {
            return currItems.filter(item => item.name !== name)
        })
    }

    return <ShoppingCartContext.Provider 
        value={{
            getItemQuantity, 
            increaseCartQuantity, 
            decreaseCartQuantity, 
            removeFromCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}
        >
        {children}
        <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
}
