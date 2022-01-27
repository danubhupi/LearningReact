
import ExpenseItems from "./components/ExpenseItems";


function App() {

  const arrObj=[{
    title:'school',
    date: new Date(2021,3,28),
    price:25000
  },
  {
    title:'gym',
    date: new Date(2021,3,18),
    price:2000
  },
  {
    title:'extra',
    date: new Date(2021,3,15),
    price:5000
  }];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems title={arrObj[0].title} date={arrObj[0].date} price={arrObj[0].price}></ExpenseItems>
      <ExpenseItems title={arrObj[1].title} date={arrObj[1].date} price={arrObj[1].price}></ExpenseItems>
      <ExpenseItems title={arrObj[2].title} date={arrObj[2].date} price={arrObj[2].price}></ExpenseItems>

    </div>
  );
}

export default App;
