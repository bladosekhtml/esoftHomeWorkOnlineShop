import { useContext } from "react";

import CartContext from "../../contexts/CartContext";
import { products } from "../../data/data";

const productsObj = {};
products.forEach(product => productsObj[product['id']] = product)

import CartItem from "./CartItem";

const CartList = () => {
    const {cart} = useContext(CartContext);

    return (
        <ul className="cartList">
            {Object.keys(cart).filter(id => cart[id] > 0 && productsObj?.[id]).map(id => (
                <li key={id}>
                    <CartItem product={productsObj[id]} count={cart[id]} />
                </li>
            ))}
        </ul>
    );
};

export default CartList;