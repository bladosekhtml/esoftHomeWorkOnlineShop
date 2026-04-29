import { useContext } from "react";

import Container from "../Container";

import Page404 from "../../pages/Page404";
import ProductListContent from "../../pages/ProductListContent";
import CartPage from "../../pages/CartPage";

import PageContent from "../../contexts/PageContext";

const mainContent = {
    "/catalog": <ProductListContent key='catalog' />,  
    "/tv": <ProductListContent key='tv' />,  
    "/laptop": <ProductListContent key='laptop' />,  
    "/phone": <ProductListContent key='phone' />,  
    '/cart': <CartPage />
};

const Content = () => {
    const { page } = useContext(PageContent);

    return (
        <main>
            <Container>{mainContent[page] || <Page404 />}</Container>
        </main>
    );
};

export default Content;