import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppRoot } from "@telegram-apps/telegram-ui";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <AppRoot>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppRoot>
    </React.StrictMode>,
);

