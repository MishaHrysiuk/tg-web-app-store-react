import React from "react";
import { useTelegram } from "../../hooks/useTelegram";
import { Avatar, Caption } from "@telegram-apps/telegram-ui";
import "./Header.css";

const Header = () => {
    const { user } = useTelegram();

    console.log(user);

    return (
        <div className={"header"}>
            <Avatar
                size={40}
                src={
                    user?.photo_url ||
                    "https://avatars.githubusercontent.com/u/84640980?v=4"
                }
            />
            <Caption level="1" weight="1" className={"username"}>
                {user?.username || "test_test"}
            </Caption>
        </div>
    );
};

export default Header;
