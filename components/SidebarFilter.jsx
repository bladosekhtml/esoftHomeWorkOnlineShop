import InputsContainer from "./inputs/InputsContainer";

import Select from "./inputs/Select";
import InputText from "./inputs/InputText";

import Button from "./Button";
import Container from './Container';
import { useContext } from "react";
import { ProductsContext } from "../src/context/ProductsContext";

function SidebarFilter() {
    const products = useContext(ProductsContext);
    const filterOptions = products.map(function (product) {
        return {
            value: product.brand,
            text: product.brand,
        };
    });

    return (
        <Container>
            <h4>Filters</h4>
            <InputsContainer labelText='Brand'>
                <Select options={filterOptions} />
            </InputsContainer>
            <InputsContainer labelText='Price Range'>
                <span style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '17px',
                }}>
                    <InputText />
                    <InputText />
                </span>
            </InputsContainer>
            <Button>Apply Filters</Button>
        </Container>
    );
};

export default SidebarFilter;