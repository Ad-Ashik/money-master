// get input value
function getInputValue(price) {
    const inputFild = document.getElementById(price + '-input');
    const inputValue = parseInt(inputFild.value);
    inputFild.value = '';
    return inputValue;
}

// calculate button evevt
document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');
    const totalExpens = foodInput + rentInput + clothesInput;
    document.getElementById('total-expens').innerText = totalExpens;

    // salary
    const salaryInput = getInputValue('salary');
    const subTotal = salaryInput - totalExpens;
    document.getElementById('total-salary').innerText = subTotal;
});

