import { useShoppingCart } from "../context/ShoppingCartContext"
import getImage from "../utils/getImage"
import { useEffect } from "react"
import useGetFruits from "../utils/useGetFruits"


type CartItemProps = {
    name: string
    quantity: number
}

export function CartItem({name, quantity}: CartItemProps) {
    const {removeFromCart, getItemQuantity} = useShoppingCart()

    const {products, images} = useGetFruits()


    const item = products.find(item => item.name === name)
    if (item == null) return null

    const imageSrc = images[name]
    const quantityOf = getItemQuantity(name);

    return (
        <div key={name} className="flex items-center gap-2">
            
            <img className="max-w-8" src={imageSrc || ''} alt={name} />
            <div>{name}</div>
            <div>x{quantityOf}</div>
        </div>
    )
}