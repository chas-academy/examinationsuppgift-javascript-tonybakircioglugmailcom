let balance = 0;

function addTransaction(type) {
  const desc = document.getElementById("desc").value.trim();
  const amountInput = document.getElementById("amount").value.trim();

  // Validering: tomma fält
  if (desc === "" || amountInput === "") {
    return;
  }

  // Validering: beloppet måste vara ett tal
  const amount = parseFloat(amountInput);
  if (isNaN(amount)) {
    return;
  }

  // Skapa ny listpunkt med korrekt format
  const li = document.createElement("li");

  if (type === "income") {
    li.textContent = `${desc} - ${amount} kr (Inkomst)`;
    document.getElementById("incomeList").appendChild(li);
    balance += amount;
  } else {
    li.textContent = `${desc} - ${amount} kr (Utgift)`;
    document.getElementById("expenseList").appendChild(li);
    balance -= amount;
  }

  // Uppdatera saldot på skärmen
  document.getElementById("balance").textContent = balance;

  // Töm fälten efter lyckad transaktion
  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

document.getElementById("incomeBtn").addEventListener("click", function () {
  addTransaction("income");
});

document.getElementById("expenseBtn").addEventListener("click", function () {
  addTransaction("expense");
});