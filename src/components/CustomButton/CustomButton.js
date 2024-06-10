import React from "react";
import { Button, colors } from "@mui/material";
import { useTelegram } from "../../hooks/useTelegram";
import { styled } from "@mui/material/styles";

const CustomButton = (props) => {
    const { tg } = useTelegram();

    const CustomButton = styled(Button)({
        color: tg.ThemeParams?.button_text_color,
        backgroundColor: tg.ThemeParams?.button_color,
    });

    console.log(tg.themeParams);

    return <CustomButton {...props} />;
};

export default CustomButton;
