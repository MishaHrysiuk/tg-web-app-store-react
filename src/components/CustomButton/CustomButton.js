import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const CustomButton = (props) => {
    const CustomButton = styled(Button)({
        color: props.ThemeParams?.button_text_color || "#55FF55",
        backgroundColor: props.ThemeParams?.button_color,
    });

    return <CustomButton {...props} />;
};

export default CustomButton;
