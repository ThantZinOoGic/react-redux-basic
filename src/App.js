import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  const incHandler = () => {
    dispatch({type:"INC"})
  }

  const decHandler = () => {
    dispatch({type : "DEC"})
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={incHandler}>Inc</button>
      <button onClick={decHandler}>Dec</button>
    </div>
  );
}

export default App;
