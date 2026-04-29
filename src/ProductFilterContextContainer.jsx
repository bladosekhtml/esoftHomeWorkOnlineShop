import { useContext, useMemo } from "react";

import PageContent from "./contexts/PageContext";
import ProductsContext from "./contexts/ProductsContext";

import { products } from "./data/data";

const ProductFilterContextContainer = ({ children }) => {
    const {page} = useContext(PageContent);

    const filteredProducts = useMemo(() => {
        switch (page) {
            case '/tv': return products.filter(product => product.category === 'tv');
            case '/laptop': return products.filter(product => product.category === 'laptop');
            case '/phone': return products.filter(product => product.category === 'phone');
            default: return products;
        }
    }, [page]);

    return (
        <ProductsContext.Provider value={filteredProducts}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductFilterContextContainer;