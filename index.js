let inputBill = document.querySelector('.input-bill');
const buttons = document.querySelectorAll('.button-percent');
let custom = document.querySelector('.custom-input')
let inputNumberOfPeople = document.querySelector('.input-number-people');
let tipAmount = document.querySelector('.tip-amount-numbers');
let total = document.querySelector('.total-numbers');
let reset = document.querySelector('.reset-all');
let rename;

inputBill.addEventListener('input', () => {
    calculateTipAmount()
})

buttons.forEach((element) => {
    element.addEventListener('click',(button) => {
    button.preventDefault()
    const percent = button.target.innerHTML
    rename = percent.replace('%', '')
    calculateTipAmount()
    })
})

custom.addEventListener('input', () => {
    rename = custom.value
    calculateTipAmount()
})

inputNumberOfPeople.addEventListener('input', () => {
    calculateTipAmount()
})

const calculateTipAmount = () => {
    if(inputBill.value && rename && inputNumberOfPeople.value) {
        const tipAmountResult = ((inputBill.value * (rename / 100)) /inputNumberOfPeople.value)
        const totalResult = ((inputBill.value / inputNumberOfPeople.value) + tipAmountResult)
        tipAmount.innerHTML = '$' + tipAmountResult.toFixed()
        total.innerHTML = '$' + totalResult.toFixed()
    }
}

reset.addEventListener('click', () => {
    inputBill.value = ""
    inputNumberOfPeople.value = ""
    tipAmount.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
})










