const creditAmountInput = document.getElementById("creditAmount");
const creditAmountSlider = document.getElementById("creditAmountSlider");
const repaymentPeriodInput = document.getElementById("repaymentPeriod");
const repaymentPeriodSlider = document.getElementById("repaymentPeriodSlider");
const sumEveryDayText = document.querySelector("#result-day");
const totalRepaymentText = document.querySelector("#result-over");
const btnPassCredit = document.querySelector("#pass-credit");
const formSubmin = document.querySelector(".login-form");
const interestRate = 2.2;

const sumOnDay = (sum, period) => {
  const result = sum + sum * (interestRate / 100) * period;
  console.log("sum", sum);
  console.log("period", period);
  return result;
};

const updateResults = () => {
  const amount = Number(creditAmountInput.value);
  const period = Number(repaymentPeriodInput.value);

  let isValid = true;

  if (amount === 0 || creditAmountInput.value === "") {
    creditAmountInput.style.borderColor = "red";
    isValid = false;
  } else {
    creditAmountInput.style.borderColor = "green";
  }

  if (period === 0 || repaymentPeriodInput.value === "") {
    repaymentPeriodInput.style.borderColor = "red";
    isValid = false;
  } else {
    repaymentPeriodInput.style.borderColor = "green";
  }

  if (isValid) {
    const result = sumOnDay(amount, period);
    sumEveryDayText.textContent = (result / period).toFixed(2);
    totalRepaymentText.textContent = result.toFixed(2);
    btnPassCredit.disabled = false;
  } else {
    sumEveryDayText.textContent = "0.00";
    totalRepaymentText.textContent = "0.00";
    btnPassCredit.disabled = true;
  }
};

creditAmountInput.addEventListener("input", function () {
  creditAmountSlider.value = creditAmountInput.value;
  updateResults();
});
creditAmountSlider.addEventListener("input", function () {
  creditAmountInput.value = creditAmountSlider.value;
  updateResults();
});

repaymentPeriodInput.addEventListener("input", function () {
  repaymentPeriodSlider.value = repaymentPeriodInput.value;
  updateResults();
});
repaymentPeriodSlider.addEventListener("input", function () {
  repaymentPeriodInput.value = repaymentPeriodSlider.value;
  updateResults();
});

formSubmin.addEventListener("submit", function (ev) {
  ev.preventDefault;
  alert("Кредит успішно отримано");
  btnPassCredit.disabled = true;
  formSubmin.recect();
});
