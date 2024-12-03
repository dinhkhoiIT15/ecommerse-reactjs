import { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SidebarContext } from "@/contexts/SidebarProvider";
import { StoreContext } from "@/contexts/storeProvider";
import Cookies from "js-cookie";

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SidebarContext);
    const { userInfo, handleLogOut } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);

    const handleClickShowLogin = () => {
        if (content === "Sign in" && !userInfo) {
            setIsOpen(true);
            setType("login");
        }
    };

    const handleRenderText = () => {
        if (content === "Sign in" && userInfo) {
            return `Hello: ${userInfo?.username}`;
        } else {
            return content;
        }
    };

    const handleHover = () => {
        if (content === "Sign in" && userInfo) {
            setIsShowSubMenu(true);
        }
    };

    return (
        <div
            className={menu}
            onClick={handleClickShowLogin}
            onMouseEnter={handleHover}
        >
            {handleRenderText(content)}

            {isShowSubMenu && (
                <div
                    className={subMenu}
                    onMouseLeave={() => setIsShowSubMenu(false)}
                    onClick={handleLogOut}
                >
                    LOG OUT
                </div>
            )}
        </div>
    );
}

export default Menu;
