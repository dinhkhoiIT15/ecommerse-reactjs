import HeaderSidebar from "@components/ContentSidebar/componentsSidebar/HeaderSidebar/HeaderSidebar";
import styles from "./styles.module.scss";
import { TfiReload } from "react-icons/tfi";
import ItemProduct from "@components/ContentSidebar/componentsSidebar/ItemProduct/ItemProduct";

function Compare() {
    const { container } = styles;

    return (
        <div className={container}>
            <HeaderSidebar
                icon={<TfiReload style={{ fontSize: "25px" }} />}
                title={"COMPARE"}
            />
            <ItemProduct />
        </div>
    );
}

export default Compare;
