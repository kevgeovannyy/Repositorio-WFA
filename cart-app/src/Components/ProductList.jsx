import ProductItem from './ProductItem';

function ProductList({ products, addToCart }) {
    return (
        <div>
            <h2 className="mb-4">Lista de Productos</h2>
            <div className="row">
                {products.map((product) => (
                    <ProductItem key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
}

export default ProductList;
