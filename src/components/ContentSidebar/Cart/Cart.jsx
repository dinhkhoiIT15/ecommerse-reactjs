import HeaderSidebar from "@components/ContentSidebar/componentsSidebar/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { PiShoppingCart } from "react-icons/pi";
import ItemProduct from "@components/ContentSidebar/componentsSidebar/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";

function Cart() {
    const { container, total, boxBtn } = styles;
    const { listProductsCart } = useContext(SidebarContext);

    return (
        <div className={container}>
            <div>
                <HeaderSidebar icon={<PiShoppingCart />} title={"CART"} />

                {listProductsCart.map((item, index) => {
                    return (
                        <ItemProduct
                            key={index}
                            src={item.images[0]}
                            nameProduct={item.name}
                            priceProduct={item.price}
                            skuProduct={item.sku}
                            sizeProduct={item.size}
                            quantity={item.quantity}
                        />
                    );
                })}
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>11234</p>
                </div>

                <div className={boxBtn}>
                    <Button content={"VIEW CART"} />
                    <Button content={"CHECKOUT"} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;
