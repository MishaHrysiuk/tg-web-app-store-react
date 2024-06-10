import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import "./ProductItem.css";

const ProductItem = ({
    product,
    className,
    onAdd,
    alreadyAdded,
    ThemeParams,
}) => {
    const onAddHandler = () => {
        onAdd(product);
    };

    return (
        <div className={"product " + className}>
            <div className={"img"} />
            <div className={"title"}>{product.title}</div>
            <div className={"description"}>{product.description}</div>
            <div className={"price"}>
                <span>
                    Стоимость: <b>{product.price}</b>
                </span>
            </div>
            <CustomButton
                variant="contained"
                onClick={onAddHandler}
                ThemeParams={ThemeParams}
            >
                {alreadyAdded ? "Прибрати з корзини" : "Добавить в корзину"}
            </CustomButton>
        </div>
    );
};

export default ProductItem;
