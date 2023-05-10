import './App.css';
import AboutPage from './Components/AboutPage/AboutPage';
import Peticion from './Components/Peticion/Peticion.jsx';
import Layout from './Components/Layout/Layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/Home" element={<Peticion />} />
        <Route path="/About/:id" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
