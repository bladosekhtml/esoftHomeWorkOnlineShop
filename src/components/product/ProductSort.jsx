import Select from "../inputs/Select"
import InputsContainer from "../inputs/InputsContainer"

import { productSortOptions } from "../../data/sorts";

const ProductSort = ({ onChange }) => {
    return (
        <InputsContainer labelText='SortBy' style={{ marginBottom: '30px', }}>
            <Select options={productSortOptions} onChange={e => onChange(e.target.value)} />
        </InputsContainer>
    );
};

export default ProductSort;