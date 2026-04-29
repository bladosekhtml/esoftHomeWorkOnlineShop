import { useContext, useMemo } from "react";

import CartContext from "../../contexts/CartContext";
import { products } from "../../data/data";
import InfoBlock from "../InfoBlock";
import Button from "../Button";
import Link from "../links/Link";

const productsObj = {};
products.forEach(product => productsObj[product['id']] = product)

const CartOrderBlock = () => {
    const {cart} = useContext(CartContext);

    const resultSum = useMemo(() => {
        return Object.keys(cart).filter(id => cart[id] > 0 && productsObj?.[id]).reduce((acc, id) => acc + cart[id] * productsObj[id].price, 0)
    }, [cart]);

    return (
        <InfoBlock>
            <h3>Order Summary</h3>
            <div className="cartPrices__row">
                <span className="label">Subtotal</span>
                <span>${resultSum.toLocaleString()}</span>
            </div>
            <div className="cartPrices__row">
                <span className="label">Tax</span>
                <span>
                    $({(resultSum * 0.08).toLocaleString()})
                </span>
            </div>
            <div className="cartPrices__row" style={{marginBottom: '20px'}}>
                <span className="label">
                    Shipping
                </span>
                <span className="label">
                    Calculated at checkout
                </span>
            </div>
            <div className='cartPrices__result'>
                <div className="cartPrices__row">
                    <span>Total</span>
                    <span>
                        ${(resultSum * 1.08).toLocaleString()}
                    </span>
                </div>
            </div>
            <Button>Proceed to Checkout</Button>
            <Link to='/tv' className='button--default button--white'>Continue Shopping</Link>
        </InfoBlock>
    )
};

export default CartOrderBlock;