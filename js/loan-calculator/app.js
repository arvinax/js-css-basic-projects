const form = document.querySelector("#loan-form");

form.addEventListener("submit", (e) => {
  const amount = document.querySelector("#amount");
  const interest = document.querySelector("#interest");
  const years = document.querySelector("#years");
  const monthlyPayment = document.querySelector("#monthly-payment");
  const totalPayment = document.querySelector("#total-payment");
  const totalInterest = document.querySelector("#total-interest");

  // total int = amount*2/100 || totPay = totInt + amount || monthPay = totpay/(year*12)

  totalInterest.value =
    (parseInt(amount.value) * parseInt(interest.value)) / 100;
  totalPayment.value = parseInt(totalInterest.value) + parseInt(amount.value);
  monthlyPayment.value =
    parseInt(totalPayment.value) / (parseInt(years.value) * 12);

  const errorDiv = document.createElement("div");
  const card = document.querySelector(".card");

  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode("fuck you boy"));

  card.appendChild(errorDiv);

  e.preventDefault();
});
