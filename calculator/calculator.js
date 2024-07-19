const creditAmountInput = document.getElementById("creditAmount");
const creditAmountSlider = document.getElementById("creditAmountSlider");
const repaymentPeriodInput = document.getElementById("repaymentPeriod");
const repaymentPeriodSlider = document.getElementById("repaymentPeriodSlider");

creditAmountInput.addEventListener("input", function () {
  creditAmountSlider.value = creditAmountInput.value;
});
creditAmountSlider.addEventListener("input", function () {
  creditAmountInput.value = creditAmountSlider.value;
});

repaymentPeriodInput.addEventListener("input", function () {
  repaymentPeriodSlider.value = repaymentPeriodInput.value;
});
repaymentPeriodSlider.addEventListener("input", function () {
  repaymentPeriodInput.value = repaymentPeriodSlider.value;
});
