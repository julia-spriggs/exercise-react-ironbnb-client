import ironhackersImg from "./assets/ironhackers.avif"
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import ApartmentsList from "./components/ApartmentsList";
import ApartmentDetails from "./components/ApartmentDetails";
import CreateApartment from "./components/CreateApartment";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar />
      <h1>Welcome</h1>
      <img src={ironhackersImg} alt="ironhackers" />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/apartments' element={<ApartmentsList />} />
        <Route path='/apartments/:apartmentId' element={<ApartmentDetails />} />
        <Route path='/apartments/create' element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
