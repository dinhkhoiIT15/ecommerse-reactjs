import styles from "./styles.module.scss";
import { useContext } from "react";
import { SidebarContext } from "@/contexts/SidebarProvider";
import classNames from "classnames";
import { TfiClose } from "react-icons/tfi";

function Sidebar() {
    const { container, overlay, sidebar, slideSidebar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SidebarContext);

    const handleToggle = () => {
        setIsOpen(!isOpen);
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
            </div>
        </div>
    );
}

export default Sidebar;
