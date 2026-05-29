const checkBox = document.getElementById("subscribe");
const visa = document.getElementById("visa");
const paypal = document.getElementById("paypal");
const mastercard = document.getElementById("mastercard");
const submit = document.getElementById("mySubmit");
const subresult = document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");

submit.onclick = function() {
  if(checkBox.checked) {
    subresult.textContent = `You are subscribed.`
  } else {
    subresult.textContent = `You are not subscribed.`
  }
  if(visa.checked) {
    paymentresult.textContent = `You are paying with Visa.`
  } else if (paypal.checked) {
    paymentresult.textContent = `You are paying with PayPal.`
  } else if (mastercard.checked) {
    paymentresult.textContent = `You are paying with MasterCard.`
  } else {
    paymentresult.textContent = `You must select a payment method.`
  }
}