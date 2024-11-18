import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";
import { useEffect } from "react";
import { getProduct } from "@/apis/productsService";

function Homepage() {
    const { container } = styles;

    useEffect(() => {
        getProduct();
    }, []);

    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts />
                <div style={{ height: "200px" }}></div>
            </div>
        </>
    );
}

export default Homepage;
