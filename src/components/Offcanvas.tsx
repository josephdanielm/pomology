import { ReactNode } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

type OffCanvasProps = {
    show: boolean
    children?: ReactNode
}

const OffCanvas = ({ show, children }: OffCanvasProps) => {
    const {closeCart} = useShoppingCart()
  return (
    <>
    {show && <div className="fixed top-0 left-0 z-0 w-full h-full bg-black bg-opacity-50 " onClick={closeCart}></div>}
      <div
      className={`fixed top-0 right-0 h-full z-10 w-80 bg-white drop-shadow-lg transform transition-transform duration-300 ease-in-out ${
        show ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-4">
        <div className="flex justify-between mb-6">
          <h2 className="text-xl font-semibold">Bag</h2>
          <button
            className='flex items-center justify-center px-2 py-1 font-medium text-center bg-gray-100 text-gray-900 border border-gray-300 rounded hover:bg-gray-200 active:bg-gray-300 transition-all duration-300 ease-in-out '
            onClick={closeCart}
          >
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
    </>
    
  );
};

export default OffCanvas;