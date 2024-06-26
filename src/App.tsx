import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterService from './services/CharacterService';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NoPage from './components/NoPage/NoPage';
import Fight from './components/Fight/Fight';
import ChampSelect from './components/ChampSelect/champSelect';
function App() {

  useEffect(() => {
    const getCharac = async () => {
      console.log(await CharacterService.getCharacters());
    }
    getCharac();
  },[])

  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/champselect" element={<ChampSelect />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
