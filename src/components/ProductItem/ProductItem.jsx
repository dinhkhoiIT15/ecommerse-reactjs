import styles from "./styles.module.scss";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useState, useEffect } from "react";
import { OurShopContext } from "@contexts/OurShopProvider";
import { LiaEyeSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import Cookies from "js-cookie";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { ToastContext } from "@/contexts/ToastProvider";
import { addProductToCart } from "@/apis/cartService";
import LoadingTextCommon from "@components/LoadingTextCommon/LoadingTextCommon";

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomaPage = true
}) {
    // const { isShowGrid } = useContext(OurShopContext);
    const [sizeChoose, setSizeChoose] = useState("");
    const ourShopStore = useContext(OurShopContext);
    const [isShowGrid, setIsShowGrid] = useState(ourShopStore?.isShowGrid);
    const userId = Cookies.get("userId");
    const { setIsOpen, setType, handleGetListProductsCart } =
        useContext(SidebarContext);
    const { toast } = useContext(ToastContext);
    const [isLoading, setIsLoading] = useState(false);

    const {
        containerItem,
        boxImg,
        showImgWhenHover,
        showFunctionWhenHover,
        boxIcon,
        title,
        priceCl,
        boxSize,
        size,
        textCenter,
        boxBtn,
        content,
        leftBtn,
        largeImg,
        isActiveSize,
        btnClear
    } = styles;

    const handleChooseSize = (size) => {
        setSizeChoose(size);
    };

    const handleClearSize = () => {
        setSizeChoose("");
    };

    const handleAddToCart = () => {
        if (!userId) {
            setIsOpen(true);
            setType("login");
            toast.warning("Please login to add product to cart!");

            return;
        }

        if (!sizeChoose) {
            toast.warning("Please choose size!");

            return;
        }

        const data = {
            userId,
            productId: details._id,
            quantity: 1,
            size: sizeChoose
        };

        setIsLoading(true);
        addProductToCart(data)
            .then((res) => {
                setIsOpen(true);
                setType("cart");
                toast.success("Add product to cart successfully!");
                setIsLoading(false);
                handleGetListProductsCart(userId, "cart");
            })
            .catch((err) => {
                toast.error("Add product to cart failed!");
                setIsLoading(false);
            });
    };

    useEffect(() => {
        if (isHomaPage) {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(ourShopStore?.isShowGrid);
        }
    }, [isHomaPage, ourShopStore?.isShowGrid]);

    return (
        <div className={isShowGrid ? "" : containerItem}>
            <div
                className={cls(boxImg, {
                    [largeImg]: !isShowGrid
                })}
            >
                <img src={src} alt="..." />
                <img src={prevSrc} alt="..." className={showImgWhenHover} />

                <div className={showFunctionWhenHover}>
                    <div className={boxIcon}>
                        <LiaShoppingBagSolid style={{ fontSize: "20px" }} />
                    </div>
                    <div className={boxIcon}>
                        <CiHeart style={{ fontSize: "25px" }} />
                    </div>
                    <div className={boxIcon}>
                        <TfiReload style={{ fontSize: "20px" }} />
                    </div>
                    <div className={boxIcon}>
                        <LiaEyeSolid style={{ fontSize: "23px" }} />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? "" : content}>
                {!isHomaPage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div
                                    className={cls(size, {
                                        [isActiveSize]: sizeChoose === item.name
                                    })}
                                    key={index}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            );
                        })}
                    </div>
                )}

                {sizeChoose && (
                    <div className={btnClear} onClick={() => handleClearSize()}>
                        clear
                    </div>
                )}
                <div
                    className={cls(title, {
                        [textCenter]: !isHomaPage
                    })}
                >
                    {name}
                </div>
                {!isHomaPage && (
                    <div className={textCenter} style={{ color: "#888" }}>
                        Bran
                    </div>
                )}
                <div
                    className={cls(priceCl, { [textCenter]: !isHomaPage })}
                    style={{
                        color: isHomaPage ? "#333" : "#888"
                    }}
                >
                    ${price}
                </div>
                {!isHomaPage && (
                    <div
                        className={cls(boxBtn, {
                            [leftBtn]: !isShowGrid
                        })}
                    >
                        <Button
                            content={
                                isLoading ? (
                                    <LoadingTextCommon />
                                ) : (
                                    "ADD TO CART"
                                )
                            }
                            onClick={handleAddToCart}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
