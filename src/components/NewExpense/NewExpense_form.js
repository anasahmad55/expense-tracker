import "./NewExpense_form.css";
import react, {useState} from 'react'
const NewExpenseForm = (props) => {

    const [enterTitle, setEnterTitle] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterDate, setEnterDate] = useState('');

    const titleChangeHandler = (e) =>{
        setEnterTitle(e.target.value);
    }
    
    const AmountChangeHandler = (e) => {
        setEnterAmount(e.target.value);
    }

    const DateChangeHandler = (e) => {
        setEnterDate(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const ExpenseData = {
            title: enterTitle,
            date: new Date(enterDate),
            amount: enterAmount
        }

        props.addExpense(ExpenseData);
        setEnterTitle('');
        setEnterDate('');
        setEnterAmount(''); 
    }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enterTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-12" max="2021-12-29" onChange={DateChangeHandler} value={enterDate}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" onChange={AmountChangeHandler} value={enterAmount}></input>
        </div>
      </div>
      <div className='New-expense__action'>
          <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm