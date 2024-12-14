import HeaderSidebar from "@components/ContentSidebar/componentsSidebar/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { PiShoppingCart } from "react-icons/pi";
import ItemProduct from "@components/ContentSidebar/componentsSidebar/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function Cart() {
    const {
        container,
        total,
        boxBtn,
        price,
        containerListProductCart,
        overlayLoading
    } = styles;
    const { listProductsCart, isLoading } = useContext(SidebarContext);

    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icon={<PiShoppingCart style={{ fontSize: "30px" }} />}
                    title={"CART"}
                />

                {isLoading ? (
                    <LoadingTextCommon />
                ) : (
                    listProductsCart.map((item, index) => {
                        return (
                            <ItemProduct
                                key={index}
                                src={item.images[0]}
                                nameProduct={item.name}
                                priceProduct={item.price}
                                skuProduct={item.sku}
                                sizeProduct={item.size}
                                quantity={item.quantity}
                                productId={item.productId}
                                userId={item.userId}
                            />
                        );
                    })
                )}
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p className={price}>11234</p>
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
