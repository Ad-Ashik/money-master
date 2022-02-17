// get input value
function getInputValue(price) {
    const inputFild = document.getElementById(price + '-input');
    const inputValue = parseInt(inputFild.value);
    // inputFild.value = '';
    return inputValue;
}

// calculate button evevt
document.getElementById('calculate').addEventListener('click', function () {
    const foodInput = getInputValue('food');
    const rentInput = getInputValue('rent');
    const clothesInput = getInputValue('clothes');
    const totalExpens = foodInput + rentInput + clothesInput;

    // salary
    const salaryInput = getInputValue('salary');
    const subTotal = salaryInput - totalExpens;

    if (foodInput >= 0 && rentInput >= 0 && clothesInput >= 0 && salaryInput > 0) {
        document.getElementById('total-expens').innerText = totalExpens;
        document.getElementById('total-salary').innerText = subTotal;
    }
    else {
        alert('please valid number');
    }

    // not  enough
    if (salaryInput < totalExpens) {
        alert('your income is not  enough');
        document.getElementById('total-expens').innerText = "0000";
        document.getElementById('total-salary').innerText = "0000";
    }
});

// saving button event
document.getElementById('saving-button').addEventListener('click', function () {
    const salaryInput = getInputValue('salary');
    const saveInput = getInputValue('save');
    const saving = (salaryInput * saveInput) / 100;
    // condition check
    if (salaryInput > 0) {
        document.getElementById('saving-amount').innerText = saving;
    }
    else {
        alert('please valid number');
    }


    // save
    const totalSalary = parseInt(document.getElementById('total-salary').innerText);
    const savingAmount = parseInt(document.getElementById('saving-amount').innerText);
    if (totalSalary > 0) {
        document.getElementById('total-balance').innerText = totalSalary - savingAmount;
    }
    else {
        alert('please valid number');
    }

    // condition check
    if (totalSalary < savingAmount) {
        alert('your saving is not  enough');
        document.getElementById('saving-amount').innerText = "0000";
        document.getElementById('total-balance').innerText = "0000";
    }
})