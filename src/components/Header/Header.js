import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import { useTelegram } from "../../hooks/useTelegram";
import "./Header.css";

const Header = () => {
    const { user, onClose, ThemeParams, tg } = useTelegram();

    console.log(ThemeParams);
    console.log(tg);

    return (
        <div className={"header"}>
            <CustomButton
                variant="contained"
                onClick={onClose}
                ThemeParams={ThemeParams}
            >
                Закрыть
            </CustomButton>
            <span className={"username"}>{user?.username}</span>
        </div>
    );
};

export default Header;
