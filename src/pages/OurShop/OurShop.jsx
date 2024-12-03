import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import MyHeader from "@components/Header/Header";
import { useNavigate } from "react-router-dom";
import Banner from "@pages/OurShop/components/Banner";

function OurShop() {
    const { container, functionBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handleBackPrevPage = () => navigate(-1);

    return (
        <>
            <MyHeader />
            <MainLayout>
                <div className={container}>
                    <div className={functionBox}>
                        <div>
                            Home &gt; <span className={specialText}>Shop</span>
                        </div>
                        <div
                            className={btnBack}
                            onClick={() => handleBackPrevPage()}
                        >
                            &lt; Return to previous page
                        </div>
                    </div>

                    <Banner />
                </div>
            </MainLayout>
        </>
    );
}

export default OurShop;
