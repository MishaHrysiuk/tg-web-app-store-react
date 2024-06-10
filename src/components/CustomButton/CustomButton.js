import React from "react";
import { Button } from "@mui/material";
import { useTelegram } from "../../hooks/useTelegram";
import { styled } from "@mui/material/styles";

const CustomButton = (props) => {
    const { ThemeParams } = useTelegram();

    console.log(ThemeParams);

    const CustomButton = styled(Button)({
        color: ThemeParams?.button_text_color || "#55FF55",
        backgroundColor: ThemeParams?.button_color,
    });

    return <CustomButton {...props} />;
};

export default CustomButton;
