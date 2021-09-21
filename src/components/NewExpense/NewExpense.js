import { useState } from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpense_form";
const NewExpense = (props) => {
  const[addButton, setAddButton] = useState(false);

  const onExpenseHandler = (e) => {
    const expensedata = {
      ...e,
      id: Math.random().toString(),
    };

    props.onAddExpense(expensedata);
  };
  const trueButton = () => {
    setAddButton(true)
  }
  const returnBack = () =>{
    setAddButton(false)
  }

  return (
    <div className="new-expense">
      {!addButton ? <button onClick={trueButton}>Add New Expense</button> :<NewExpenseForm addExpense={onExpenseHandler} onCancel={returnBack}/> }
      
      
    </div>
  );
};

export default NewExpense;
