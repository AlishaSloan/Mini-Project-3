import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Meal from "./components/Meals";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Recipes from "./components/Recipes";


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path="/meals" element={<Meal />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
        <Route path="/recipes" element={<Recipes />}></Route>

        </Routes>
    
      
      </BrowserRouter>
      

    </>
  )
}

export default App;
