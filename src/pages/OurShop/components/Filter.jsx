import { TfiLayoutGrid4 } from "react-icons/tfi";
import { CiCircleList } from "react-icons/ci";
import styles from "../styles.module.scss";
import classNames from "classnames";
import { useContext } from "react";
import { OurShopContext } from "@contexts/OurShopProvider";
import SelectBox from "@pages/OurShop/components/SelectBox";

function Filter() {
    const {
        containerFilter,
        boxIcon,
        boxLeft,
        selectBox,
        boxRight,
        sort,
        show
    } = styles;
    const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
        useContext(OurShopContext);
    const getValueSelect = (value, type) => {
        if (type === "sort") {
            setSortId(value);
        } else {
            setShowId(value);
        }
    };

    const handleGetShowGrid = (type) => {
        if (type === "grid") {
            setIsShowGrid(true);
        } else {
            setIsShowGrid(false);
        }
    };

    return (
        <div className={containerFilter}>
            <div className={boxLeft}>
                <SelectBox
                    options={sortOptions}
                    getValue={getValueSelect}
                    type="sort"
                />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        style={{
                            fontSize: "23px",
                            color: "#222",
                            cursor: "pointer"
                        }}
                        onClick={() => handleGetShowGrid("grid")}
                    />
                    <div
                        style={{
                            height: "20px",
                            width: "1px",
                            backgroundColor: "#e1e1e1"
                        }}
                    />
                    <CiCircleList
                        style={{
                            fontSize: "27px",
                            color: "#222",
                            cursor: "pointer"
                        }}
                        onClick={() => handleGetShowGrid("list")}
                    />
                </div>
            </div>

            <div className={boxRight}>
                <div style={{ fontSize: "14px", color: "#555" }}>Show</div>
                <SelectBox
                    options={showOptions}
                    getValue={getValueSelect}
                    type="show"
                />
            </div>
        </div>
    );
}

export default Filter;
