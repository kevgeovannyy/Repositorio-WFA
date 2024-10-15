function ProductItem({ product, addToCart }) {
    const handleAddToCart = () => {
        addToCart(product);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">Precio: ${product.price.toFixed(2)}</p>
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}



export default ProductItem;