import { useContext } from "react";

import InfoBlock from "../InfoBlock";
import Button from "../Button";
import ProductCardImageSlider from "./ProductCardImageSlider";
import CartContext from "../../contexts/CartContext";

const ProductCard = ({ product }) => {
    const {cart, handleChange} = useContext(CartContext);

    return (
        <InfoBlock style={{
            maxWidth: '100%',
            justifyContent: 'space-between',
        }}>
            <ProductCardImageSlider images={product.images || []} />
            <div className='productCard__info'>
                <span className="productCard__brand">{product.brand || ''}</span>
                <span className="productCard__model">{product.model || ''}</span>
            </div>
            <span>
                ${(product.price || 0).toLocaleString()}
            </span>
            {
                (cart[product.id] || 0) == 0
                ? 
                <Button onClick={() => handleChange(product.id, 1)}>Add to Cart</Button>
                :
                <div className="cartButtons">
                    <Button className='button--gray cartButton' onClick={() => handleChange(product.id, -1)}>-</Button>
                    <span>
                        {cart[product.id] || 0} in cart
                    </span>
                    <Button className='cartButton' onClick={() => handleChange(product.id, 1)}>+</Button>
                </div>
            }
        </InfoBlock>
    );
};

export default ProductCard;