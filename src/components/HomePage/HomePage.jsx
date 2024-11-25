import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import styles from "./styles.module.scss";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadingListProducts from "@components/HeadingListProducts/HeadingListProducts";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productsService";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";

function Homepage() {
    const { container } = styles;

    const [listProduct, setListProduct] = useState([]);

    //call api
    useEffect(() => {
        const query = {
            //Set limit product=10
            sortType: 0,
            page: 1,
            limit: 10
        };

        getProducts(query).then((res) => {
            setListProduct(res.contents);
        });
    }, []);

    return (
        <>
            <div className={container}>
                <MyHeader />
                <Banner />
                <Info />
                <AdvanceHeadling />
                <HeadingListProducts data={listProduct.slice(0, 2)} />
                <PopularProduct
                    data={listProduct.slice(2, listProduct.length)}
                />
                <SaleHomePage />
                <div style={{ height: "200px" }}></div>
            </div>
        </>
    );
}

export default Homepage;
