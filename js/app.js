// get input value
function getInputValue(price) {
    const inputFild = document.getElementById(price + '-input');
    const inputValue = parseInt(inputFild.value);
    // inputFild.value = '';
    return inputValue;

}

// salary
function salarySave(totalExpens) {
    // const salaryInput = getInputValue('salary');
    // const subTotal = salaryInput - totalExpens;
    if (salaryInput > 0) {
        return subTotal;
    }
    else {
        alert('please valid number');
    }

}

// calculate button evevt
document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');
    const totalExpens = foodInput + rentInput + clothesInput;
    // document.getElementById('total-expens').innerText = totalExpens;

    // salary
    const salaryInput = getInputValue('salary');
    const subTotal = salaryInput - totalExpens;
    // document.getElementById('total-salary').innerText = subTotal;

    if (foodInput >= 0 && rentInput >= 0 && clothesInput >= 0 && salaryInput > 0) {
        document.getElementById('total-expens').innerText = totalExpens;
        document.getElementById('total-salary').innerText = subTotal;


    }
    else {
        alert('please valid number');
    }
});

// saving button event
document.getElementById('saving-button').addEventListener('click', function () {
    const salaryInput = getInputValue('salary');
    const saveInput = getInputValue('save');
    const saving = (salaryInput * saveInput) / 100;

    // save
    const totalSalary = parseInt(document.getElementById('total-salary').innerText);
    const savingAmount = parseInt(document.getElementById('saving-amount').innerText);
    const totalBalance = totalSalary - savingAmount;
    if (salaryInput > 0) {
        document.getElementById('saving-amount').innerText = saving;
        document.getElementById('total-balance').innerText = totalBalance;
    }
    else {
        alert('please valid number');
    }
})