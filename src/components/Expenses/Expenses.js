import { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const ChangeFilter = (year) => {
    setFilterYear(year);
  };

  const FilteredArray = props.items.filter(filterByYear);

  function filterByYear(item) {
    return item.date.getFullYear().toString() === filterYear;
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selectedYear={filterYear}
          onChangeFilter={ChangeFilter}
        />
        <ExpensesChart expenses={FilteredArray}></ExpensesChart>
        <ExpenseList items={FilteredArray}></ExpenseList>
      </Card>
    </div>
  );
}

export default Expenses;
