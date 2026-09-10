import { useState } from "react";
import "./Food.css";

function Food() {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      date: "10-09-2026",
      category: "Lunch",
      description: "College Canteen",
      amount: 150,
    },
    {
      id: 2,
      date: "09-09-2026",
      category: "Snacks",
      description: "Tea and Samosa",
      amount: 80,
    },
  ]);

  // Add new food expense
  const addExpense = (event) => {
    event.preventDefault();

    if (!category || !amount || !date) {
      alert("Please fill Category, Amount and Date.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      date: date,
      category: category,
      description: description,
      amount: Number(amount),
    };

    setExpenses([...expenses, newExpense]);

    // Clear the form
    setCategory("");
    setAmount("");
    setDate("");
    setDescription("");
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter((expense) => expense.id !== id)
    );
  };

  // Calculate total
  const totalFoodExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="food-page">

      {/* Header */}
      <div className="food-header">
        <h1>🍔 Food Expenses</h1>
        <p>Track and manage your daily food spending</p>
      </div>

      {/* Summary Cards */}
      <div className="food-summary">

        <div className="summary-card">
          <p>Total Food Expense</p>
          <h2>₹{totalFoodExpense}</h2>
        </div>

        <div className="summary-card">
          <p>Total Transactions</p>
          <h2>{expenses.length}</h2>
        </div>

      </div>

      {/* Add Expense Form */}
      <div className="food-card">

        <h2>Add Food Expense</h2>

        <form onSubmit={addExpense}>

          {/* Category */}
          <div className="form-group">
            <label>Food Category</label>

            <select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              <option value="">Select category</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snacks">Snacks</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Amount */}
          <div className="form-group">
            <label>Amount</label>

            <input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(event) =>
                setAmount(event.target.value)
              }
            />
          </div>

          {/* Date */}
          <div className="form-group">
            <label>Date</label>

            <input
              type="date"
              value={date}
              onChange={(event) =>
                setDate(event.target.value)
              }
            />
          </div>

          {/* Description */}
          <div className="form-group">
            <label>Description</label>

            <input
              type="text"
              placeholder="Example: College canteen"
              value={description}
              onChange={(event) =>
                setDescription(event.target.value)
              }
            />
          </div>

          <button
            type="submit"
            className="add-food-btn"
          >
            + Add Expense
          </button>

        </form>

      </div>

      {/* Expense History */}
      <div className="food-card">

        <h2>Food Expense History</h2>

        <div className="expense-table">

          {/* Table Header */}
          <div className="table-header">
            <span>Date</span>
            <span>Category</span>
            <span>Description</span>
            <span>Amount</span>
            <span>Action</span>
          </div>

          {/* Expense Rows */}
          {expenses.map((expense) => (

            <div
              className="table-row"
              key={expense.id}
            >

              <span>{expense.date}</span>

              <span>
                <span className="category-badge">
                  {expense.category}
                </span>
              </span>

              <span>
                {expense.description || "-"}
              </span>

              <span>₹{expense.amount}</span>

              <button
                className="delete-btn"
                onClick={() =>
                  deleteExpense(expense.id)
                }
              >
                Delete
              </button>

            </div>

          ))}

        </div>

        {/* Total */}
        <div className="food-total">
          Total: ₹{totalFoodExpense}
        </div>

      </div>

    </div>
  );
}

export default Food;