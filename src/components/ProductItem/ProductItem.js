import React from "react";
import { Button, Image, InlineButtons } from "@telegram-apps/telegram-ui";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "./ProductItem.css";

const ProductItem = ({ product, className, onAdd, alreadyAdded }) => {
    const onAddHandler = () => {
        onAdd(product);
    };

    return (
        <div className={"product " + className}>
            <Image
                size={96}
                src="https://avatars.githubusercontent.com/u/84640980?v=4"
            ></Image>
            <div className={"title"}>{product.title}</div>
            <div className={"description"}>{product.description}</div>
            <div className={"price"}>
                <span>
                    Стоимость: <b>{product.price}</b>
                </span>
            </div>
            <div
                style={{
                    maxWidth: 160,
                }}
            >
                <InlineButtons.Item
                    mode="bezeled"
                    text="Add to cart"
                    onClick={onAddHandler}
                    style={{ backgroundColor: alreadyAdded ? "red" : null }}
                >
                    {alreadyAdded ? (
                        <RemoveShoppingCartIcon />
                    ) : (
                        <AddShoppingCartIcon />
                    )}
                </InlineButtons.Item>
            </div>
        </div>
    );
};

export default ProductItem;
