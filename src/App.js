import './App.css';
import List from './components/List';
import Alert from './components/Alert';
import Form from './components/Form';

const { v4: uuid } = require('uuid');

const initialExpenses = [
  {id: uuid(), charge:"rent", amount: 1600},
  {id: uuid(), charge:"car", amount: 5000},
  {id: uuid(), charge:"tax", amount: 200}
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
