import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTelegram } from "../../hooks/useTelegram";

const CustomButton = (props) => {
    const { themeParams } = useTelegram();

    console.log(themeParams);

    const CustomButton = styled(Button)({
        color: themeParams?.button_text_color || "#55FF55",
        backgroundColor: themeParams?.button_color,
    });

    return <CustomButton {...props} />;
};

export default CustomButton;
