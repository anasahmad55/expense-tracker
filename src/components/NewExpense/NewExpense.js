import "./NewExpense.css";
import NewExpenseForm from "./NewExpense_form";
const NewExpense = (props) => {

  const onExpenseHandler = (e) => {
    const expensedata = {
      ...e,
      id: Math.random().toString(),
    };

    props.onAddExpense(expensedata);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm addExpense={onExpenseHandler} />
    </div>
  );
};

export default NewExpense;
