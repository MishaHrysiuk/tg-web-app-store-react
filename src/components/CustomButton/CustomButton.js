import React from "react";
import { Button } from "@mui/material";
import { useTelegram } from "../../hooks/useTelegram";
import { styled } from "@mui/material/styles";

const CustomButton = () => {
    const { tg } = useTelegram();

    const CustomButton = styled(Button)({
        color: tg.ThemeParams?.button_text_color,
        backgroundColor: tg.ThemeParams?.button_color,
    });

    return <CustomButton />;
};

export default CustomButton;
