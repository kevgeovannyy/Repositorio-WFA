function CartItem({ product, removeFromCart }) {
    return (
        <tr>
            <td>{product.name}</td>
            <td>${product.price.toFixed(2)}</td>
            <td>
                <button className="btn btn-danger" onClick={() => removeFromCart(product.id)}>
                    Eliminar
                </button>
            </td>
        </tr>
    );
}

export default CartItem;
