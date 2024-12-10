import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import Logo from "@icons/images/Logo-retina.png";
import { TfiReload } from "react-icons/tfi";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCart } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import useScrollHandling from "@/hooks/useScrollHandling";
import classNames from "classnames";
import { SidebarContext } from "@/contexts/SidebarProvider";

function MyHeader() {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader,
        boxCart,
        quantity
    } = styles;

    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { isOpen, setIsOpen, listProductsCart } = useContext(SidebarContext);

    const handleOpenSidebar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        //Neu scrollPosition > 80 thi setStickyPosition = true {Hien thi menu bar}
        // if (scrollPosition > 80) {
        //     setFixedPosition(true);
        // } else {
        //     setFixedPosition(false);
        // }
        //---------
        // setFixedPosition(scrollPosition > 80 ? true : false);
        //---------
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);

    return (
        <div
            className={classNames(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item) => {
                            return (
                                <BoxIcon type={item.type} href={item.href} />
                            );
                        })}
                    </div>

                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            //slice chi in ra 3 tu 0 den 3
                            return (
                                <Menu content={item.content} href={item.href} />
                            );
                        })}
                    </div>
                </div>

                <div>
                    <a href="#logo">
                        <img
                            src={Logo}
                            alt="Logo"
                            style={{ width: "153px", height: "53px" }}
                        />
                    </a>
                </div>

                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            //slice chi in ra 3 phan tu tu 3 den het
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>

                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{ fontSize: "20px", cursor: "pointer" }}
                            onClick={() => handleOpenSidebar("compare")}
                        />
                        <BsHeart
                            style={{ fontSize: "20px", cursor: "pointer" }}
                            onClick={() => handleOpenSidebar("wishlist")}
                        />
                        <div className={boxCart}>
                            <PiShoppingCart
                                style={{ fontSize: "25px", cursor: "pointer" }}
                                onClick={() => handleOpenSidebar("cart")}
                            />

                            <div className={quantity}>
                                {listProductsCart.length}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyHeader;
