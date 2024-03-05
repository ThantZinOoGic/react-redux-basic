import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {actions} from './store/index';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const incHandler = () => {
    dispatch(actions.increament())
  }

  const decHandler = () => {
    dispatch(actions.decreament())
  }
  const addByHandler = () => {
    dispatch(actions.addBy(10))
  }
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incHandler}>Inc</button>
      <button onClick={decHandler}>Dec</button>
      <button onClick={addByHandler}>Add 10</button>
    </div>
  );
}

export default App;