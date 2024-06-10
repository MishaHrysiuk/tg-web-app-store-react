import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { useTelegram } from "../../hooks/useTelegram";
import { styled } from "@mui/material/styles";

const CustomButton = (props) => {
    const { tg } = useTelegram();

    useEffect(() => {}, [tg]);

    const CustomButton = styled(Button)({
        color: tg.ThemeParams?.button_text_color || "#55FF55",
        backgroundColor: tg.ThemeParams?.button_color,
    });

    console.log(tg.ThemeParams);

    return <CustomButton {...props} />;
};

export default CustomButton;
