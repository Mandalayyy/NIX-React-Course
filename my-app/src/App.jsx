import './App.css';
import {TodoElementsList} from './Components/TodoElementsList/TodoElementsList';
import {TodoModalFormElement} from './Components/TodoModalFormElement/TodoModalFormElement';
import { selectIsModalFormVisable } from "../src/Rdx/App/selector";
import {useSelector} from 'react-redux';
import { TodoSortElement } from './Components/TodoSortElement/TodoSortElement';


export const App = () => {

  const isModalFormVisable = useSelector(selectIsModalFormVisable)

  return (
    
    <div className="App">
      <TodoSortElement />
      <TodoElementsList />
     {isModalFormVisable ? < TodoModalFormElement />: null } 
    </div>
  );
}

export default App;
