import './App.css';
import List from './components/List';
import Alert from './components/Alert';
import Form from './components/Form';

const initialExpenses = [
  {id: 1, charge:"rent", amount: 1600},
  {id: 2, charge:"car", amount: 5000},
  {id: 3, charge:"tax", amount: 200}
]

console.log(initialExpenses)

function App() {
  return (
    <>
    <Alert></Alert>
    <Form></Form>
    <List></List>
    </>
  );
}

export default App;
