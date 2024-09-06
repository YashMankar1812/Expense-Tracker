 
 
//  Expense Tracker App

const expenses = [];
let totalExpense = 0;
const budgetLimit = 1000000000;

document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    const expense = { description, amount, category };
    expenses.push(expense);
    totalExpense += amount;

    if (totalExpense > budgetLimit) {
        document.getElementById('budget-alert').style.display = 'block';
    }

    updateExpenseList();
    updateChart();
});

function updateExpenseList() {
    const expenseList = document.getElementById('expense-list');
    expenseList.innerHTML = expenses.map(expense => `
        <div class="expense-item">
            <span>${expense.description} - ${expense.category}</span>
            <span>$${expense.amount.toFixed(2)}</span>
            <button class="delete-button" onclick="delete-button(${expense.id})">Delete</button>
        </div>
    `).join('');
}



function deleteAll() {
    document.getElementById("expense-description").value = "";
    document.getElementById("expense-category").value = "";
    document.getElementById("expense-amount").value = "";

    const expenseList = document.getElementById("expense-list");
    if (expenseList) {
        expenseList.innerHTML = ""; 
    }
}


function updateChart() {
    const ctx = document.getElementById('expense-chart').getContext('2d');
    const categories = ['Food', 'Transport', 'Entertainment', 'Health'];
    const categoryAmounts = categories.map(cat => 
        expenses.filter(exp => exp.category === cat).reduce((acc, exp) => acc + exp.amount, 0)
    );

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: categories,
            datasets: [{
                data: categoryAmounts,
                backgroundColor: ['purple', 'blue', 'green', 'orange']

            }]
        }
    });
}





// *************************************************************************************************

// AI 
function provideFinancialAdvice() {
    // Example advice based on total expenses
    const advice = totalExpense > budgetLimit
        ? "You've exceeded your budget. Consider reducing discretionary expenses."
        : totalExpense > 500000000
        ? "You're on the cusp of exceeding your budget. Consider saving for a rainy day."
        : totalExpense > 200000000
        ? "You're on track to reach your budget. Stay focused and don't forget to save."
        : totalExpense > 100000000
        ? "You're doing well, but be cautious not to overspend."
        : totalExpense > 50000000
        ? "You're making progress, but consider saving for a rainy day."
        : totalExpense > 10000000
        ? "You're making great strides, but be cautious not to overspend."
        : "You're doing great, but be cautious not to overspend.";
        
    document.getElementById('financial-advice').innerText = advice;
}

// Call advice function after updating expenses
document.getElementById('expense-form').addEventListener('submit', provideFinancialAdvice);


// *************************************************************************************************

// Theme toggle 

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('change', () => {
  if (themeToggle.checked) {
    document.body.classList.add('dark-mode'); 
    document.getElementById('exp-tracker').style.backgroundColor ="transparent";
    document.getElementById('financial-advice').style.backgroundColor ="transparent";
        document.getElementById('data-v').style.backgroundColor ="transparent";
        document.getElementById('taxes').style.backgroundColor ="transparent";
        // border 2 px solid red for each section 
        document.getElementById('exp-tracker').style.border = "2px solid white ";
        document.getElementById('financial-advice').style.border = "2px solid white ";
        document.getElementById('data-v').style.border = "2px solid white ";
        document.getElementById('taxes').style.border = "2px solid white ";
        
        document.querySelectorAll('exp-tracker').forEach(section  => style.borderColor = '2px solid white ');
        document.getElementById('exp-tracker').style.color ="#fff";
        document.getElementById('financial-advice').style.color ="#fff";
        document.getElementById('data-v').style.color ="#fff";
        document.getElementById('taxes').style.color ="#fff";


  } else {
    document.body.classList.remove('dark-mode');
  document.getElementById('exp-tracker').style.backgroundColor ="#fff";
    document.getElementById('financial-advice').style.backgroundColor ="#fff";
        document.getElementById('data-v').style.backgroundColor ="#fff";
        document.getElementById('taxes').style.backgroundColor ="#fff";
        document.getElementById('exp-tracker').style.color ="#222";
        document.getElementById('financial-advice').style.color ="#222";
        document.getElementById('data-v').style.color ="#222";
        document.getElementById('taxes').style.color ="#222";

        document.querySelector('h2').style.color = 'white';

  }
});





// *************************************************************************************************
// Menu 


const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.remove('hidden');
});

closeBtn.addEventListener('click', () => {
  navMenu.classList.add('hidden');
});



document.querySelector('.edit-button').addEventListener('click', function() {
    const inputField = document.querySelector('.expense-input');
    inputField.focus(); // Moves cursor to the input field
});



document.querySelector('.delete-button').addEventListener('click', function() {
    // Clear input fields
    document.querySelector('.expense-input').value = '';
    
    // Remove the expense item div
    const expenseItemDiv = this.closest('.expense-item'); // Assuming .expense-item is the class of the parent div
    expenseItemDiv.remove();
});





// *************************************************************************************************
// Tax 

function calculateTaxes() {
    const income = parseFloat(document.getElementById('income-input').value);
    let taxRate = 0;

    if (income > 1000000) {
        taxRate = 20;
    } else if (income > 700000) {
        taxRate = 15;
    } else if (income > 500000) {
        taxRate = 10;
    } else if (income > 300000) {
        taxRate = 5;
    } else {
        taxRate = 0;
    }

    const taxToPay = (income * taxRate) / 100;
    const amountLeft = income - taxToPay;

    document.getElementById('total-income').textContent = income.toFixed(2);
    document.getElementById('tax-rate').textContent = taxRate + '%';
    document.getElementById('tax-to-pay').textContent = taxToPay.toFixed(2);
    document.getElementById('amount-left').textContent = amountLeft.toFixed(2);
}


function setBudget() {
    const budgetInput = document.getElementById('budget-input');
    const budgetAmount = document.getElementById('budget-amount');
  
    const budgetValue = parseFloat(budgetInput.value);
  
    if (!isNaN(budgetValue) && budgetValue >= 0) {
      budgetAmount.textContent = budgetValue.toFixed(2);
    } else {

      alert('Please enter a valid budget amount.');
    }
    budgetInput.value = '';
  }














//   startt  herere 








