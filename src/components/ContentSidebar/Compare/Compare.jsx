import HeaderSidebar from "@components/ContentSidebar/componentsSidebar/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { TfiReload } from "react-icons/tfi";
import ItemProduct from "@components/ContentSidebar/componentsSidebar/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";

function Compare() {
    const { container, boxContent } = styles;

    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSidebar
                    icon={<TfiReload style={{ fontSize: "25px" }} />}
                    title={"COMPARE"}
                />
                <ItemProduct />
            </div>

            <Button content={"VIEW COMPARE"} />
        </div>
    );
}

export default Compare;
