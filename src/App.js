import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses';

const App=()=> {
  return (
    <div className="App">
      <Expenses
      expenses={Expenses}
       />
    </div>
  );
}

export default App;
