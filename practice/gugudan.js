const $inputForm = document.querySelector(".input_gugudan_form");
const $input = document.querySelector(".input_gugudan");

const onGugudan = value => {
  for (num = 1; num < 10; num++) {
    console.log(`${value} x ${num} = ${value * num}`)
  }
}

const refreshInput = () => {
  $input.value = "";
  $input.focus();
}

const isNum = value => {
  String(value).replace(/^\s+|\s+$/g, "");
  const reg = /^[0-9]*$/;
  return reg.test(value);
}

const isValid = value => {
  if ((value === "") || (value === null) || (value === undefined)) {
    alert('값을 입력하세요');
  } else if (isNum(value) && ((value < 2) || (value > 9))) {
    alert('2~9 사이의 숫자만 입력하세요');
  } else if (!isNum(value)) {
    alert('숫자만 입력하세요');
  } else return true;
  refreshInput();
  return;
}

const handleSubmit = (e) => {
  e.preventDefault();
  const value = $input.value;
  if (isValid(value)) {
    onGugudan(value);
  }
  refreshInput();
  return;
};

$inputForm.addEventListener("submit", handleSubmit);
