const $selects = document.querySelector("#selects");
const $entryForm = document.querySelector("#entry_form");
const $entry = $entryForm.querySelector("input")
const $amount = document.querySelector("#amount");

const isNum = value => {
  String(value).replace(/^\s+|\s+$/g, "");
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

const isValid = value => {
  if ((value === "") || (value === null) || (value === undefined)) {
    alert('값을 입력하세요');
  } else if (!isNum(value)) {
    alert('숫자만 입력하세요');
  } else if (isNum(value) && ((value < 100))) {
    alert('2~9 사이의 숫자만 입력하세요');
  } else return true;
  refreshInput();
  return;
}

const refreshInput = () => {
  $entry.value = "";
  $entry.focus();
}

const handleEntry = e => {
  const { target: { value } } = e;
  if (isValid(value)) {
    console.log(value);
  }
  refreshInput();
  return;
}

$entryForm.addEventListener("submit", e => e.preventDefault());
$entry.addEventListener("change", handleEntry);

