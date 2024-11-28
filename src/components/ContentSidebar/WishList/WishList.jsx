import HeaderSidebar from "@components/ContentSidebar/componentsSidebar/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { BsHeart } from "react-icons/bs";
import ItemProduct from "@components/ContentSidebar/componentsSidebar/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function WishList() {
    const { container, boxBtn } = styles;

    return (
        <div className={container}>
            <div>
                <HeaderSidebar
                    icon={<BsHeart style={{ fontSize: "30px" }} />}
                    title={"WISHLIST"}
                />
                <ItemProduct />
            </div>

            <div className={boxBtn}>
                <Button content={"VIEW WISHLIST"} />
                <Button content={"ADD ALL TO CART"} isPrimary={false} />
            </div>
        </div>
    );
}

export default WishList;
