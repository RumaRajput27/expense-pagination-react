import React, { useState, useEffect } from 'react';
import './ExpenseList.css'; // Import the CSS file

const ExpenseList = ({ expenses }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Retrieve the stored preference from localStorage when the component mounts
  useEffect(() => {
    const storedPreference = localStorage.getItem('itemsPerPage');
    if (storedPreference) {
      setItemsPerPage(parseInt(storedPreference, 10));
    }
  }, []);

  // Handle changing the number of expenses displayed per page
  const handleChangeItemsPerPage = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setItemsPerPage(newValue);
    localStorage.setItem('itemsPerPage', newValue); // Store the preference in localStorage
  };

  if (!expenses || !Array.isArray(expenses)) {
    return <div>There was an error loading the expenses list.</div>;
  }

  // Slice the expenses array to display the correct number of items
  const visibleExpenses = expenses.slice(0, itemsPerPage);

  return (
    <div className="expense-list">
      <h1>Expense List</h1>

      <div className="items-per-page">
        <label htmlFor="itemsPerPage">Items per page:</label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={handleChangeItemsPerPage}
        >
          <option value={5}>5</option>
          <option value={10}>6</option>
          <option value={15}>7</option>
          <option value={20}>8</option>
          <option value={30}>9</option>
          <option value={40}>10</option>
        </select>
      </div>

      <div className="expenses">
        {visibleExpenses.map((expense, index) => (
          <div key={index} className="expense-item">
            <p>{expense.description} - <span>${expense.amount}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
