// Write your JavaScript here
    const denominations = [
        { name: '$100 bills', value: 100 },
        { name: '$50 bills', value: 50 },
        { name: '$20 bills', value: 20 },
        { name: '$10 bills', value: 10 },
        { name: '$5 bills', value: 5 },
        { name: '$1 bills', value: 1 },
        { name: 'Quarters', value: 0.25 },
        { name: 'Dimes', value: 0.10 },
        { name: 'Nickels', value: 0.05 },
        { name: 'Pennies', value: 0.01 }
    ];


function handleCalculateButtonClick() {
    // Get the input values
    const amountDue = parseFloat(document.getElementById('amount-due').value);
    const amountReceived = parseFloat(document.getElementById('amount-received').value);
    
    // Validate inputs
    if (isNaN(amountDue) || isNaN(amountReceived)) {
        alert('Please enter valid numbers for both fields.');
        return;
    }
    
    if (amountReceived < amountDue) {
        alert('Amount received must be greater than or equal to amount due.');
        return;
    }
    
    // Calculate change using integer math to avoid floating point errors
    let changeCents = Math.round((amountReceived - amountDue) * 100);

    const dollars = Math.floor(changeCents / 100); changeCents -= dollars * 100;
    const quarters = Math.floor(changeCents / 25); changeCents -= quarters * 25;
    const dimes = Math.floor(changeCents / 10); changeCents -= dimes * 10;
    const nickels = Math.floor(changeCents / 5); changeCents -= nickels * 5;
    const pennies = changeCents;

    document.getElementById('dollars-output').textContent = `Dollars: ${dollars}`;
    document.getElementById('quarters-output').textContent = `Quarters: ${quarters}`;
    document.getElementById('dimes-output').textContent = `Dimes: ${dimes}`;
    document.getElementById('nickels-output').textContent = `Nickels: ${nickels}`;
    document.getElementById('pennies-output').textContent = `Pennies: ${pennies}`;

    let outputElement = document.getElementById('change-result');
    outputElement.textContent = `Change: $${(amountReceived - amountDue).toFixed(2)}`;
}

function handleResetButtonClick() {
    document.getElementById('amount-due').value = '';
    document.getElementById('amount-received').value = '';
    document.getElementById('change-result').textContent = '--';
    ['dollars-output', 'quarters-output', 'dimes-output', 'nickels-output', 'pennies-output'].forEach(id => {
        document.getElementById(id).textContent = '';
    });
}

document.getElementById('reset-calculator').onclick = handleResetButtonClick;
document.getElementById('calculate-change').onclick = handleCalculateButtonClick;