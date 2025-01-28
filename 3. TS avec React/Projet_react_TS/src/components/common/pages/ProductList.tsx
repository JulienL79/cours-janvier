import { Product } from "@common-atoms/Product";

export const ProductList = () => {
    return (
    <div className="page">
        <Product id={1} price={10} name={"Rose"} description={"Best rose of the world"}/>
        <Product id={2} price={25} name={"Pissenlit"} description={"Best pissenlit of the world"}/>
        <Product id={3} price={15} name={"Cactus"} description={"Best cactus of the world"}/>
    </div>
    )
}