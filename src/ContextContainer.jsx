import { useState } from "react";

import PageContext from "./contexts/PageContext";
import CartContext from "./contexts/CartContext";

import ProductFilterContextContainer from "./ProductFilterContextContainer";

const ContextContainer = ({ children }) => {
    const [page, setPage] = useState("/tv");
    const [cart, setCart] = useState({});

    const handleChangeCountPoroducts = (productId, appendCount, needConfirm = false, saveCount = 1) => {
        setCart(prevCart => {
            const newCart = {...prevCart};
            newCart[productId] =  Math.max((newCart[productId] || 0) + appendCount, 0);
            if (needConfirm && newCart[productId] == 0 && !confirm('Вы уверены, что хотите удалить данный товар?')) newCart[productId] = saveCount; 
            return newCart;
        });
    };

    return (
        <PageContext.Provider value={{ page, setPage }}>
            <ProductFilterContextContainer>
                <CartContext.Provider value={{cart, handleChange: handleChangeCountPoroducts}}>
                    { children }
                </CartContext.Provider>
            </ProductFilterContextContainer>
        </PageContext.Provider>
    );
};

export default ContextContainer;
