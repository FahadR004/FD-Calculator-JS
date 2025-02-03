function calculateMaturityAmount() {

    const principle = parseFloat(document.getElementById("principle").value);
    const interestRate = parseFloat(document.getElementById("interest-rate").value);
    const tenureYears = parseFloat(document.getElementById("tenure").value);  // Will get floating point values from a string

    const maturityAmount = principle + (principle * interestRate * tenureYears)/100;
    console.log(maturityAmount);

    document.getElementById("result").innerText = `Maturity Amounnt: ${maturityAmount.toFixed(2)}`;
}