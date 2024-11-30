// Function to calculate mortgage payments
document.getElementById('mortgageForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get input values
    let loanAmount = parseFloat(document.getElementById('loanAmount').value);
    let interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12; // Monthly interest rate
    let loanTerm = parseInt(document.getElementById('loanTerm').value) * 12; // Loan term in months
    let currencySymbol = document.getElementById('currency').value; // Get selected currency symbol

    // Calculate monthly payment using the formula: M = P [ r(1+r)^n ] / [ (1+r)^n – 1]
    let monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) / (Math.pow(1 + interestRate, loanTerm) - 1);

    // Calculate total payment and total interest
    let totalPayment = monthlyPayment * loanTerm;
    let totalInterest = totalPayment - loanAmount;

    // Display the results with selected currency symbol
    document.getElementById('monthlyPayment').textContent = `${currencySymbol}${monthlyPayment.toFixed(2)}`;
    document.getElementById('totalPayment').textContent = `${currencySymbol}${totalPayment.toFixed(2)}`;
    document.getElementById('totalInterest').textContent = `${currencySymbol}${totalInterest.toFixed(2)}`;

    // Show the result section
    document.getElementById('result').classList.remove('d-none');
});
