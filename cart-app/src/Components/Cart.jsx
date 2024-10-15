import CartItem from './CartItem';

function Cart({ cart, removeFromCart }) {
    // Calcular el total del carrito
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);

    return (
        <div>
            <h2>Carrito</h2>
            {cart.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((product) => (
                                <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
                            ))}
                        </tbody>
                    </table>
                    <div className="text-right">
                        <h4>Total: ${totalPrice.toFixed(2)}</h4>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
