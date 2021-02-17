const $inputForm = document.querySelector("#inputNumber_form");
const $input = document.querySelector("#inputNumber");

const isValid = value => {
  if ((typeof value !== 'number') || isNaN(value)) {
    alert('숫자를 입력해 주세요.')
  } else if (value < 2 || value > 9) {
    alert('2~9 구구단 입니다.')
  } else return true;
}

const onGugudan = value => {
  for (i = 1; i < 10; i++) {
    console.log(`${value} x ${i} = ${value * i}`)
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  if ($input.value === ('' || undefined || null)) {
    alert('값을 입력하세요');
    return;
  }
  const value = parseInt($input.value, 10);
  if (!isValid(value)) return;
  onGugudan(value);
};

$inputForm.addEventListener("submit", handleSubmit);
