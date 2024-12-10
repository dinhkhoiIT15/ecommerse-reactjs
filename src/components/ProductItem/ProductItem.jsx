import styles from "./styles.module.scss";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext, useState, useEffect } from "react";
import { OurShopContext } from "@contexts/OurShopProvider";
import { LiaEyeSolid, LiaShoppingBagSolid } from "react-icons/lia";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";

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
                        <Button content={"ADD TO CART"} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductItem;
