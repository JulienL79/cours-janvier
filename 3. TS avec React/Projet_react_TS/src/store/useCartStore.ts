import { create } from "zustand";
import { IProduct } from "@common-atoms/Product";

interface IProductCart {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

interface ICartStore {
    cart: IProductCart[],
    addProduct: (product: IProduct) => void,
    removeProduct: (product: IProductCart) => void,
    resetCart: () => void
}

export const useCartStore = create<ICartStore>((set) => ({
    cart: [],
    addProduct: (product: IProduct) => set((state) => {

        const existingProduct = state.cart.find((item) => item.id === product.id);

        if (existingProduct) {
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        }

        return {
            cart: [...state.cart, {...product, quantity: 1}],
        };
    }),

    removeProduct: (product: IProductCart) => set((state) => {

        const existingProduct = state.cart.find((item) => item.id === product.id);

        if (!existingProduct) return state;

        if (existingProduct.quantity > 1) {
            return {
                cart: state.cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        }

        return {
            cart: state.cart.filter((item) => item.id !== product.id),
        };
    }),

    resetCart: () => set({cart: []})
}))