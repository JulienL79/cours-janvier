import { IProduct } from "./Product.props";
import "./Product.css"
import { Button } from "@common-atoms/Button";
import { useCartStore } from "@store/useCartStore";

export const Product : React.FC<IProduct> = ({id, price, name, description}) => {
    const { addProduct } = useCartStore()
    const product = {
        id,
        price,
        name,
        description
    }

    return (
        <div className="product">
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
            <Button content="Ajouter" onClick={() => addProduct(product)}/>
        </div>
    )

}