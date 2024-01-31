import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyHome from './components/Home/MyHome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MyHome/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
