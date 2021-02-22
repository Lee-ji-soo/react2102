const $selects = document.querySelector("#selects");
const $select = $selects.querySelectorAll(".select");
const $entry = document.querySelector("#entry")
const $exit = document.querySelector("#exit");
const $paid = document.querySelector("#paid");

let paid = 0;
let selectedArr = [];
let exithtml = "";
let stock = {};

const setStock = () => {
  const selectsArr = [];
  $select.forEach((item) => {
    const { dataset: { select } } = item;
    selectsArr.push(select);
  })
  selectsArr.map((select) => stock[select] = 5)
}

window.addEventListener("load", setStock);

const hasBalance = price => {
  if (paid >= price) {
    return true;
  } else {
    alert('잔액이 부족합니다.')
    return false;
  }
}

const hasStock = select => {
  if (stock[select] > 0) {
    return true;
  } else {
    alert(`${select}는 품절입니다.`)
    return false;
  }
}

const handleBalance = price => {
  paid -= price;
  $paid.innerHTML = paid;
}

const handleSelect = select => {
  //재고관리
  stock[select] -= 1;
  //지금까지 출력된 음료수
  selectedArr.push(select);
  if (selectedArr.length > 0) {
    exithtml = selectedArr.map(select => select).join(",");
    $exit.innerHTML = exithtml;
  } else return;
}

const handleEntry = e => {
  let { target: { dataset: { value } } } = e;
  value = Number(value);

  if (value) {
    if ((paid + value) <= 20000) {
      paid += value;
      $paid.innerHTML = `${paid}원 입니다.`;
    } else {
      alert('투입 금액 한도 초과!')
      return;
    }
  } else return;
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
