import React from "react";
import Product from "./components/Product";
import Cup from "./components/Cup";
function App() {
    var onClick = function (quantity) {
        console.log(quantity + '개를 구매했습니다.');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "React + TypeScript + Webpack"),
        React.createElement(Product, { name: "포도", price: 2000, description: '달고 맛있는 5월의 포도', buy: onClick }),
        React.createElement(Cup, { color: "yellow", volume: 250 })));
}
;
export default App;
