
function inputAmount(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldNum = inputField.value;
    const inputFieldText = parseFloat(inputFieldNum);
    inputField.value = inputFieldText;

    inputField.value = '';
    return inputFieldText;
}
//total amount
function totalAmount(inputId, amount) {
    const totalAmounttag = document.getElementById(inputId);
    const currentAmountNum = totalAmounttag.innerText;
    const currentAmountText = parseFloat(currentAmountNum)
    const newCurrentAmount = currentAmountText + amount;
    totalAmounttag.innerText = newCurrentAmount;
}

// total balance not bigger than total withdraw
function getInputValue(inputId, amount) {
    const fieldTag = document.getElementById(inputId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;
}

//total balance
function tolatBalance(amount, isAdd) {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const totalBalanceFloating = parseFloat(totalBalanceText);
    totalBalance.innerText = totalBalanceFloating;
    if (isAdd == true) {
        totalBalance.innerText = totalBalanceFloating + amount;
    }
    else {
        totalBalance.innerText = totalBalanceFloating - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const amount = inputAmount('deposit-amount');
    if (amount > 0) {
        totalAmount('deposit-total', amount);
        tolatBalance(amount, true);
    }
});
document.getElementById('withdraw-button').addEventListener('click', function () {
    const amount = inputAmount('withdraw-amount');
    const balance = getInputValue('balance-total')
    if (amount > 0 && amount <= balance) {
        totalAmount('withdraw-total', amount);
        tolatBalance(amount, false);
    }
})