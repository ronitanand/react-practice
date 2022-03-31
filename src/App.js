
import Expenses from "./components/Expenses/Expenses";
import ExpenseHeader from "./components/Expenses/ExpenseHeader";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
  const DUMMY_EXPENSES= [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const[expenses,setExpenses]=useState(DUMMY_EXPENSES);

  const addExpenseHandler=(expense)=>{
    // let res=[]
    // for(let i=0;i<expenses.length;i++){
    //   res.push(expenses[i]);

    // }
    // res.concat([expense])
    // setExpenses(res);
    
    setExpenses((prevExpenses)=>{
      return [expense,...prevExpenses];
    });
    // setExpenses([expense,...expenses]);
    console.log(expenses);
    
    
  }

  


  return (
    <div className="App">
      <ExpenseHeader/>
      
      <NewExpense onAddExpense={addExpenseHandler}  />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
