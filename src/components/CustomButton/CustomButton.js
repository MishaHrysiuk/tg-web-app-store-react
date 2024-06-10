import React from "react";
import { Button } from "@mui/material";
import { useTelegram } from "../../hooks/useTelegram";

const CustomButton = (props) => {
    const { tg } = useTelegram();

    return (
        <Button
            {...props}
            sx={{
                color: tg.ThemeParams?.button_text_color,
                backgroundColor: tg.ThemeParams?.button_color,
            }}
        />
    );
};

export default CustomButton;
