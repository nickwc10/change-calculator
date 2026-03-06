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
function calculateChange() {
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
    
    // Calculate change
    let change = amountReceived - amountDue;
    
    // Define denominations    

    
    // Calculate the number of each denomination
    const changeBreakdown = {};
    
    for (const denomination of denominations) {
        changeBreakdown[denomination.name] = Math.floor(change / denomination.value);
        change -= changeBreakdown[denomination.name] * denomination.value;
    }
    
    // Display the result
    let result = `Change: $${(amountReceived - amountDue).toFixed(2)}\n\n`;
    let denominationsList = document.getElementById('denominations-list');
    denominationsList.innerHTML = ''; // Clear previous results
    for (const denomination of denominations) {
        if (changeBreakdown[denomination.name] > 0) {
            //result += `${denomination.name}: ${changeBreakdown[denomination.name]}\n`;
            denominationsList.appendChild(document.createElement('p')).textContent = `${denomination.name} --- ${changeBreakdown[denomination.name]}`;
        }
    }
    let outputElement = document.getElementById('change-result');
    outputElement.textContent = result;

}

function handleCalculateButtonClick() {
    calculateChange();
}

function handleResetButtonClick() {
    document.getElementById('amount-due').value = '';
    document.getElementById('amount-received').value = '';
    document.getElementById('change-result').textContent = '--';
    document.getElementById('denominations-list').innerHTML = '';
}

document.getElementById('reset-calculator').onclick = handleResetButtonClick;
document.getElementById('calculate-change').onclick = handleCalculateButtonClick;