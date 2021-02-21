const $selects = document.querySelector("#selects");
const $entryForm = document.querySelector("#entry_form");
const $entry = $entryForm.querySelector("#entry")
const $exit = document.querySelector("#exit");
const $paid = document.querySelector("#paid");
let paid = 0;
let selectedArr = [];
let exithtml = "";

const refreshInput = () => {
  $entry.value = "";
  $entry.focus();
}

const isNum = value => {
  String(value).replace(/^\s+|\s+$/g, "");
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

const isValidUnit = value => {
  return (value >= 100) && (value % 100 === 0);
}

const isValid = value => {
  if ((value === "") || (value === null) || (value === undefined)) {
    alert('값을 입력하세요');
  } else if (!isNum(value)) {
    alert('숫자만 입력하세요');
  } else if (!isValidUnit(value)) {
    alert('100원, 1000원만 투입하세요');
  } else return true;
  refreshInput();
  return;
}

const handleEntry = e => {
  const { target: { value } } = e;
  if (isValid(value)) {
    paid += Number(value);
    $paid.innerHTML = `${paid}원 입니다.`;
  }
  refreshInput();
  return;
}

const isPaid = price => {
  if (paid < price) {
    alert('잔액이 부족합니다.')
  } else return true;
  return;
}

const handleSelects = e => {
  const { target: { dataset: { price, select } } } = e;
  if (isPaid(price)) {

    selectedArr.push(select);
    if (selectedArr.length > 0) {
      exithtml = selectedArr.map(select => select).join(",");
      $exit.innerHTML = exithtml;
    }

    paid -= price;
    $paid.innerHTML = paid;
  }

}

$entryForm.addEventListener("submit", e => e.preventDefault());
$entry.addEventListener("change", handleEntry);
$selects.addEventListener("click", handleSelects);
