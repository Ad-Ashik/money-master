// get input value
function getInputValue(price) {
    const inputFild = document.getElementById(price + '-input');
    const inputValue = parseInt(inputFild.value);
    // inputFild.value = '';
    return inputValue;

}

// salary
function salarySave(totalExpens) {
    const salaryInput = getInputValue('salary');
    const subTotal = salaryInput - totalExpens;
    return subTotal;
}

// calculate button evevt
document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');
    const totalExpens = foodInput + rentInput + clothesInput;
    document.getElementById('total-expens').innerText = totalExpens;

    // salary
    const subTotal = salarySave(totalExpens);
    document.getElementById('total-salary').innerText = subTotal;
});

// saving button event
document.getElementById('saving-button').addEventListener('click', function () {
    const salaryInput = getInputValue('salary');
    const saveInput = getInputValue('save');
    const saving = (salaryInput * saveInput) / 100;
    document.getElementById('saving-amount').innerText = saving;

    const totalBalance = salarySave(totalExpens) - saving;
    console.log(totalBalance)
})