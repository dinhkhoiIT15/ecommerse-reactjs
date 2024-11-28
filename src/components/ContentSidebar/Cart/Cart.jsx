import HeaderSidebar from "@components/ContentSidebar/componentsSidebar/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { PiShoppingCart } from "react-icons/pi";
import ItemProduct from "@components/ContentSidebar/componentsSidebar/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Cart() {
    const { container, total, boxBtn } = styles;

    return (
        <div className={container}>
            <div>
                <HeaderSidebar icon={<PiShoppingCart />} title={"CART"} />
                <ItemProduct />
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
