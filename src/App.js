import React from 'react';
import ExpenseList from './ExpenseList'; // Make sure the path is correct

// Define some sample expenses
const expenses = [
  { description: 'Groceries', amount: 50 },
  { description: 'Fuel', amount: 100 },
  { description: 'Car Repair', amount: 200 },
  { description: 'Game Product', amount: 30 },
  { description: 'Vegitables', amount: 80 },
  // Add more sample expenses here if needed
];

function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;




// import React from 'react';
// import ExpenseList from './ExpenseList'; // Make sure the path is correct

// // Define some sample expenses
// const expenses = [
//   { description: 'Groceries', amount: 50 },
//   { description: 'Utilities', amount: 100 },
//   { description: 'Car Repair', amount: 200 },
//   { description: 'Entertainment', amount: 30 },
//   // Add more sample expenses here if needed
// ];

// function App() {
//   // Ensure the expenses array is defined before rendering
//   if (!Array.isArray(expenses)) {
//     return <div>There was an error loading expenses.</div>;
//   }

//   return (
//     <div className="App">
//       <h1>Expense List</h1>
//       <ExpenseList expenses={expenses} />
//     </div>
//   );
// }

// export default App;
