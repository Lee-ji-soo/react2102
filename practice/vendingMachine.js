const $selects = document.querySelector("#selects");
const $entry = document.querySelector("#entry")
const $exit = document.querySelector("#exit");
const $paid = document.querySelector("#paid");

let paid = 0;
let selectedArr = [];
let exithtml = "";
let stock = {
  coke: 5,
  sprite: 5,
  coffee: 5
}

const refreshInput = () => {
  $entry.value = "";
  $entry.focus();
}

const hasBalance = price => {
  if (paid < price) {
    alert('잔액이 부족합니다.')
  } else return true;
}

const hasStock = select => {
  if (stock[select] > 0) {
    stock[select] -= 1;
    return true;
  } else {
    alert(`${select}는 품절입니다.`)
  }
}

const handleBalance = price => {
  paid -= price;
  $paid.innerHTML = paid;
}

const handleSelect = select => {
  selectedArr.push(select);
  if (selectedArr.length > 0) {
    exithtml = selectedArr.map(select => select).join(",");
    $exit.innerHTML = exithtml;
  }
}

const handleEntry = e => {
  const { target: { dataset: { value } } } = e;
  if (value) {
    if (paid < 20000) {
      paid += Number(value);
      $paid.innerHTML = `${paid}원 입니다.`;
    } else {
      alert('투입 금액 한도 초과!')
    }
  }
  refreshInput();
  return;
}

const handleSelectBtn = e => {
  const { target: { dataset: { price, select } } } = e;
  if (hasBalance(price) && hasStock(select)) {
    handleBalance(price);
    handleSelect(select);
  } else return;
}

$entry.addEventListener("click", handleEntry);
$selects.addEventListener("click", handleSelectBtn);
