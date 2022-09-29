import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {TodoElementsList} from './Components/TodoElementsList/TodoElementsList';
import {TodoModalFormElement} from './Components/TodoModalFormElement/TodoModalFormElement';
import { TodoSortElement } from './Components/TodoSortElement/TodoSortElement';
import { WelcomePage } from './Components/WelcomePage/WelcomePage';

export const App = () => {
  return (
    
    <div className="App">
            < TodoSortElement/>
      <Routes>
        <Route path='*' element={<WelcomePage/>}/>
        <Route path='app' element={<TodoElementsList/>}/>
      </Routes> 

     < TodoModalFormElement />
    </div>
  );
}

export default App;
