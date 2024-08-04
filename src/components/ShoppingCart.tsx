import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import OffCanvas from "./Offcanvas";

type ShoppingCartProps = {
    isOpen: boolean
}

export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {cartItems} = useShoppingCart()

    return (
        <OffCanvas show={isOpen}>
            <div className="space-y-4">
            {cartItems.map(item => (
                <>
                    <CartItem key={item.name} {...item} />
                    <hr />
                </>
            ))}
            </div>
        </OffCanvas>
      )
}