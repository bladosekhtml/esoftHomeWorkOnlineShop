import { useContext, useMemo } from "react";
import CartContext from "../contexts/CartContext";
import Link from "../components/links/Link";

import CartList from "../components/cart/CartList";
import CartOrderBlock from "../components/cart/CartOrderBlock";

const CartPage = () => {
    const {cart} = useContext(CartContext);

    const cartCount = useMemo(() => {
        return Object.values(cart).reduce((acc, num) => acc + num, 0);
    }, [cart]);

    const cartContent = useMemo(() => {
        if (cartCount <= 0) return (
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                <h4>Your cart is empty</h4>
                <Link to='/tv' className='button--default'>Continue Shopping</Link>
            </div>
        );

        return (
            <>
                <CartList />
                <CartOrderBlock />
            </>
        );
    }, [cartCount]);

    return (
        <section className="cartContainer">
            <h3 style={{gridColumn: 'span 2'}}>Shopping Cart</h3>
            {cartContent}
        </section>
    );
};

export default CartPage;