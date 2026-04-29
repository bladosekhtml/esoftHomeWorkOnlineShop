import { useContext } from "react";
import Button from "../Button";
import InfoBlock from "../InfoBlock";
import CartContext from "../../contexts/CartContext";

import trash from '../../assets/icons/delete.svg';

const CartItem = ({ product, count }) => {
    const {handleChange} = useContext(CartContext);

    return (
        <InfoBlock className="cartItem">
            <img className="image" src={product.images[0] || ''} />
            <div className="cartItem__content">
                <span className="cartItem__brand">{product.brand}</span>
                <span className="cartItem__model">{product.model}</span>
                <span className="cartItem__buttons">
                    <Button className='button--gray cartButton' onClick={() => handleChange(product.id, -1, true)}>-</Button>
                    <span>
                        {count}
                    </span>
                    <Button className='cartButton' onClick={() => handleChange(product.id, 1)}>+</Button>
                </span>
            </div>
            <div className="cartItem__foot">
                <img className="cartRemove" src={trash} onClick={() => handleChange(product.id, -count, true, count)} />
                <span>${(count * product.price).toLocaleString()}</span>
            </div>
        </InfoBlock>
    );
};

export default CartItem;