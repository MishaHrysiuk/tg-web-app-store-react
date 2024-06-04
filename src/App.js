import "./App.css";
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

function App() {
    const { tg } = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.SettingsButton.show();
        tg.SettingsButton.setParams({
            text: `Settings}`,
        });
        tg.BackButton.show();
        tg.BackButton.setParams({
            text: `Back`,
        });
    }, []);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={"form"} element={<Form />} />
            </Routes>
        </div>
    );
}

export default App;

