import React from "react";
// import { styled } from "@mui/material/styles";
import { useTelegram } from "../../hooks/useTelegram";
import { Button } from "@telegram-apps/telegram-ui";

const CustomButton = (props) => {
    const { themeParams } = useTelegram();

    console.log(themeParams);

    // const CustomButton = styled(Button)({
    //     color: themeParams?.button_text_color || "#55FF55",
    //     backgroundColor: themeParams?.button_color,
    // });

    return <Button {...props} mode="filled" size="s" />;
};

export default CustomButton;
