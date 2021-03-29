import React, { useState } from "react";
function Product(_a) {
    var name = _a.name, price = _a.price, _b = _a.description, description = _b === void 0 ? "설명글이 없습니다." : _b, buy = _a.buy;
    var _c = useState(""), quantity = _c[0], setQuantity = _c[1];
    var onChangeValue = function (e) {
        var value = e.target.value;
        setQuantity(value);
    };
    return (React.createElement("div", null,
        React.createElement("h1", null,
            "\uC0C1\uD488\uBA85: ",
            name),
        React.createElement("h1", null,
            "\uAC00\uACA9: ",
            price),
        React.createElement("p", null, description),
        React.createElement("input", { value: quantity, onChange: onChangeValue }),
        React.createElement("button", { onClick: function () { return buy(quantity); } }, "buy")));
}
;
export default Product;
