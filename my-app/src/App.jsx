import './App.css';
import { Routes, Route} from "react-router-dom";
import { WelcomePage } from './Components/WelcomePage/WelcomePage';
import { DashboardPage } from './Components/DashboardPage/DashboardPage';
import { GoodsForm } from './Components/GoodsForm/GoodsForm';

import '../src/App.css' 

export const App = () => {
  return (
    
    <div className="App">
      <Routes>
        <Route path='*' element={<WelcomePage/>}/>
        <Route path='/app' element={<DashboardPage />}>
        <Route path='edit' element={<GoodsForm />} />
        </Route>
        
      </Routes> 
    </div>
  );
}

export default App;
