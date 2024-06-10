import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";

const Header = () => {
    const { user, onClose } = useTelegram();

    return (
        <div className={"header"}>
            <CustomButton color="error" onClick={onClose}>
                Закрыть
            </CustomButton>
            <span className={"username"}>{user?.username}</span>
        </div>
    );
};

export default Header;
