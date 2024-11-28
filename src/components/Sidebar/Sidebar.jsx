import styles from "./styles.module.scss";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";
import Login from "@components/ContentSidebar/Login/Login";
import Compare from "@components/ContentSidebar/Compare/Compare";

function Sidebar() {
    const { container, overlay, sidebar, slideSidebar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleRenderContent = () => {
        switch (type) {
            case "login":
                return <Login />;

            case "compare":
                return <Compare />;
            case "wishlist":
                return "wishlist";
            case "cart":
                return "cart";

            default:
                return <Login />;
        }
    };

    return (
        <div className={container}>
            <div
                className={classNames({ [overlay]: isOpen })}
                onClick={handleToggle}
            />
            <div className={classNames(sidebar, { [slideSidebar]: isOpen })}>
                {isOpen && ( //Neu isOpen = true thi render boxIcon
                    <div className={boxIcon} onClick={handleToggle}>
                        <TfiClose />
                    </div>
                )}

                {handleRenderContent()}
            </div>
        </div>
    );
}

export default Sidebar;
