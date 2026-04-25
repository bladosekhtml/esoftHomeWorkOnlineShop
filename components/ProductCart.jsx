import Container from "./Container"
import Button from "./Button";

function ProductCart ({ product }) {
    return (
        <Container style={{
            maxWidth: '100%',
            justifyContent: 'space-between',
        }}>
            <img className="productCartImage" src={product.images[0] ?? ''}></img>
            <div>
                {product.brand ?? ''}
                {product.model ?? ''}
            </div>
            <span>
                ${product.price ?? 0}
            </span>
            <Button>Add to Cart</Button>
        </Container>
    );
}

export default ProductCart