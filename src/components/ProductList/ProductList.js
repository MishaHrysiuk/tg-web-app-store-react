import React, { useState } from "react";
import "./ProductList.css";
import ProductItem from "../ProductItem/ProductItem";
import { useTelegram } from "../../hooks/useTelegram";
import { useCallback, useEffect } from "react";

const url = process.env.REACT_APP_WEB_URL;

const getTotalPrice = (items = []) => {
    return items.reduce((acc, item) => {
        return (acc += item.price);
    }, 0);
};

const ProductList = () => {
    const [addedItems, setAddedItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isError, setError] = useState(false);
    const { tg, queryId, user } = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            products: addedItems.map((product) => {
                return {
                    id: product.id,
                    count: 1,
                };
            }),
            totalPrice: getTotalPrice(addedItems),
            queryId,
        };
        fetch(`${url}/api/user/order/${user.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    }, [addedItems, user, queryId]);

    useEffect(() => {
        fetch(`${url}/api/product`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((err) => setError(true));
    }, []);

    useEffect(() => {
        tg.onEvent("mainButtonClicked", onSendData);
        return () => {
            tg.offEvent("mainButtonClicked", onSendData);
        };
    }, [onSendData, tg]);

    const alreadyAddedProduct = (product) => {
        return addedItems.find((item) => item.id === product.id);
    };

    const onAdd = (product) => {
        const alreadyAdded = alreadyAddedProduct(product);
        let newItems = [];

        if (alreadyAdded) {
            newItems = addedItems.filter((item) => item.id !== product.id);
        } else {
            newItems = [...addedItems, product];
        }

        setAddedItems(newItems);

        if (newItems.length === 0) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
            tg.MainButton.setParams({
                text: `Купить ${getTotalPrice(newItems)}`,
            });
        }
    };

    return (
        <div className={"list"}>
            {isError ? (
                <div>Error with server</div>
            ) : isLoading ? (
                <div>Loading...</div>
            ) : (
                products.map((item) => (
                    <ProductItem
                        product={item}
                        alreadyAdded={alreadyAddedProduct(item)}
                        onAdd={onAdd}
                        className={"item"}
                    />
                ))
            )}
        </div>
    );
};

export default ProductList;
