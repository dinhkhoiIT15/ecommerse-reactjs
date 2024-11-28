import { useState } from "react";
import styles from "./styles.module.scss";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ErrorMessage } from "formik";

function InputCommon({ label, type, isRequired = false, ...props }) {
    const { container, labelInput, boxInput, boxIcon, errorMsg } = styles;
    const { formik, id } = props;
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";
    const isShowTextPassword =
        type === "password" && showPassword ? "text" : type;

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const isErr = formik.touched[id] && formik.errors[id];
    const messErr = formik.errors[id];

    return (
        <div className={container}>
            <div className={labelInput}>
                {label} {isRequired && <span>*</span>}
            </div>
            <div className={boxInput}>
                <input
                    type={isShowTextPassword}
                    {...props}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values[id]}
                />
                {isPassword && (
                    <div className={boxIcon} onClick={handleShowPassword}>
                        {showPassword ? <FiEyeOff /> : <FiEye />}
                    </div>
                )}
                {isErr && <div className={errorMsg}>{messErr}</div>}
            </div>
        </div>
    );
}

export default InputCommon;
