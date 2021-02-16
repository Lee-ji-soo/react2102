const $inputNumberForm = document.querySelector("#inputNumber_form");
const $inputNumber = document.querySelector("#inputNumber");

const onGugudan = value => {
  for (i = 1; i < 10; i++) {
    console.log(`${value} x ${i} = ${value * i}`)
  };
}

const handleSubmit = (e) => {
  e.preventDefault();
  const value = $inputNumber.value;
  onGugudan(value);
};

$inputNumberForm.addEventListener("submit", handleSubmit);
