import { useState } from "react";
import Button from "../Button";

const ProductCardImageSlider = ({ images }) => {
    const [index, setIndex] = useState(0);

    const handleChangeImage = (append) => {
        setIndex(prevIndex => {
            const i = prevIndex + append;

            if (i < 0) return Math.max(images.length - 1, 0);
            else if (i > images.length - 1) return 0;
            return i;
        })
    }

    return (
        <span className="productCard__slider">
            {images.length > 1 && <Button className='imageSlider__button imageSlider__button--prev' onClick={() => handleChangeImage(-1)}>{'<'}</Button>}
            <img className="productCard__image" src={images[index] || ''}></img>
            {images.length > 1 && <Button className='imageSlider__button imageSlider__button--next' onClick={() => handleChangeImage(1)}>{'>'}</Button>}
        </span>
    );
};

export default ProductCardImageSlider;