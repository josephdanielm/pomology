import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import OffCanvas from "./Offcanvas";

type ShoppingCartProps = {
    isOpen: boolean
}




export function ShoppingCart({isOpen}: ShoppingCartProps) {
    const {cartItems, closeCart} = useShoppingCart()


    return (
        <OffCanvas show={isOpen}>
            <div className="space-y-4 max-h-[60vh] overflow-scroll border-b-2 pb-4 border-gray-200 mb-6">
            {cartItems.map(item => (
                    <CartItem key={item.name} {...item} />
            ))}
            </div>
            <div className="w-fit">
                <Link to='/checkout'>
                    <button className='flex items-center w-fit justify-center px-4 py-2 text-base font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out' onClick={closeCart}>
                        <p>Checkout</p>
                    </button>
                </Link>
            </div>
        </OffCanvas>
      )
}