import MainLayout from "@components/Layout/Layout";
import { useContext } from "react";
import { OurShopContext } from "@contexts/OurShopProvider";
import ProductItem from "@components/ProductItem/ProductItem";
import styles from "../styles.module.scss";
import Button from "@components/Button/Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function ListProducts() {
    const { containerProduct, sectionListProducts, rotate } = styles;
    const {
        products,
        isShowGrid,
        isLoading,
        handleLoadMore,
        total,
        isLoadMore
    } = useContext(OurShopContext);

    return (
        <div className={sectionListProducts}>
            <MainLayout>
                {isLoading ? (
                    <>Loading...</>
                ) : (
                    <>
                        <div className={isShowGrid ? containerProduct : ""}>
                            {products.map((item) => {
                                return (
                                    <ProductItem
                                        key={item.id}
                                        src={item.images[0]}
                                        prevSrc={item.images[1]}
                                        name={item.name}
                                        price={item.price}
                                        details={item}
                                        isHomaPage={false}
                                    />
                                );
                            })}
                        </div>

                        {products.length < total && (
                            <div
                                style={{ width: "180px", margin: "50px auto" }}
                            >
                                <Button
                                    content={
                                        isLoadMore ? (
                                            <AiOutlineLoading3Quarters
                                                className={rotate}
                                            />
                                        ) : (
                                            "LOAD MORE PRODUCT"
                                        )
                                    }
                                    onClick={handleLoadMore}
                                />
                            </div>
                        )}
                    </>
                )}
            </MainLayout>
        </div>
    );
}

export default ListProducts;
