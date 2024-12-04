import styles from "./styles.module.scss";
import reloadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";
import eyesIcon from "@icons/svgs/eyesIcon.svg";
import cls from "classnames";
import Button from "@components/Button/Button";
import { useContext } from "react";
import { OurShopContext } from "@contexts/OurShopProvider";

function ProductItem({
    src,
    prevSrc,
    name,
    price,
    details,
    isHomaPage = true
}) {
    const { isShowGrid } = useContext(OurShopContext);

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
        largeImg
    } = styles;

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
                        <img src={cartIcon} alt="..." />
                    </div>
                    <div className={boxIcon}>
                        <img src={heartIcon} alt="..." />
                    </div>
                    <div className={boxIcon}>
                        <img src={reloadIcon} alt="..." />
                    </div>
                    <div className={boxIcon}>
                        <img src={eyesIcon} alt="..." />
                    </div>
                </div>
            </div>

            <div className={isShowGrid ? "" : content}>
                {!isHomaPage && (
                    <div className={boxSize}>
                        {details.size.map((item, index) => {
                            return (
                                <div className={size} key={index}>
                                    {item.name}
                                </div>
                            );
                        })}
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
