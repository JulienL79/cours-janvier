import { useCartStore } from "@store/useCartStore"
import { Button } from "@common-atoms/Button"

export const Cart = () => {
    const {cart, removeProduct, resetCart} = useCartStore()
    const totalPrice = cart
        .map((item) => item.price * item.quantity)
        .reduce((acc, curr) => acc + curr, 0);

    return (
        <div className="cart-aside">
            {cart.map(item => {
                return (
                    <div key={item.id} className="cart-product">
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <Button className="delete-btn" content="Remove" onClick={() => removeProduct(item)}/>
                    </div>
                )
            })}

            <p>Total price: {totalPrice}€</p>

            <Button className="delete-btn" content="Reset Cart" onClick={() => resetCart()}/>
        </div>
    )
}