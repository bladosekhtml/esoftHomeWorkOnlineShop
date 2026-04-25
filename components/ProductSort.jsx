import Select from "./inputs/Select"
import InputsContainer from "./inputs/InputsContainer"

const sortOptions = [
    {
        text: 'По умолчанию',
        value: 'default',
    },
    {
        text: 'По возрастанию цены',
        value: 'priceFromMin',
    },
    {
        text: 'По убыванию цены',
        value: 'priceFromMax',
    },
];

function ProductSort() {
    return (
        <InputsContainer labelText='SortBy'>
            <Select options={sortOptions} />
        </InputsContainer>
    )
}

export default ProductSort