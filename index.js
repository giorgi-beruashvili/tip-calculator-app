let inputBill = document.querySelector('.input-bill');
const buttons = document.querySelectorAll('.button-percent');
let custom = document.querySelector('.custom-input');
let eror = document.querySelector('.eror-div p');
let inputNumberOfPeople = document.querySelector('.input-number-people');
let tipAmount = document.querySelector('.tip-amount-result');
let total = document.querySelector('.total-result');
let reset = document.querySelector('.reset-all');
let rename;

inputBill.addEventListener('input', (event) => {
    calculateTipAmount()
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/-/g, ''); 
    event.target.value = sanitizedValue;

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

inputNumberOfPeople.addEventListener('input', (event) => {
    calculateTipAmount()
    const inputValue = event.target.value;
    const sanitizedValue = inputValue.replace(/-/g, ''); 
    event.target.value = sanitizedValue;
    console.log(sanitizedValue)
})

const calculateTipAmount = () => {
    if(inputNumberOfPeople.value === '0') {
        inputNumberOfPeople.style.borderColor = "red";
        eror.style.display = 'block';
        return;
    }else {
        inputNumberOfPeople.style.borderColor = "#26c2ae";
        eror.style.display = 'none';
    }
    if(inputBill.value === '0') {
        inputBill.style.borderColor = "red"
        eror.style.display = 'block';
        return;
    }else {
        inputBill.style.borderColor = "#26c2ae"
        eror.style.display = 'none';
    }
    if(inputBill.value && rename && inputNumberOfPeople.value) {
        const tipAmountResult = ((inputBill.value * (rename / 100)) /inputNumberOfPeople.value)
        const totalResult = ((inputBill.value / inputNumberOfPeople.value) + tipAmountResult)
        tipAmount.innerHTML = '$' + tipAmountResult.toFixed()
        total.innerHTML = '$' + totalResult.toFixed()
    }
}

reset.addEventListener('click', () => {
    eror.innerHTML = ""
    inputBill.value = ""
    inputNumberOfPeople.value = ""
    tipAmount.innerHTML = "$0.00"
    total.innerHTML = "$0.00"
})










