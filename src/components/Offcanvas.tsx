import { ReactNode } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type OffCanvasProps = {
    show: boolean
    children?: ReactNode
}

const OffCanvas = ({ show, children }: OffCanvasProps) => {
    const {closeCart} = useShoppingCart()
  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <button
          className="mb-4 text-gray-500 hover:text-gray-800 focus:outline-none"
          onClick={closeCart}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default OffCanvas;