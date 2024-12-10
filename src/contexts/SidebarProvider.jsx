import { createContext, useState } from "react";
import { getCart } from "@/apis/cartService";

export const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [type, setType] = useState("");
    const [listProductsCart, setListProductsCart] = useState([]);

    const handleGetListProductsCart = (userId, type) => {
        if (userId && type === "cart") {
            getCart(userId)
                .then((res) => {
                    setListProductsCart(res.data.data);
                })
                .catch((err) => {
                    setListProductsCart([]);
                });
        }
    };

    const value = {
        isOpen,
        setIsOpen,
        type,
        setType,
        handleGetListProductsCart,
        listProductsCart
    };

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};
