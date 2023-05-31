import { useState } from "react";
import "./App.css";
import AddPeopleForm from "./components/AddPeopleForm/AddPeopleForm";
import PeopleList from "./components/PeopleList/PeopleList";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage/HomePage";
import InformationPage from "./page/InformationPage";
import LoginPage from "./page/LoginPage/LoginPage";
import Search from "./page/Search";
import AboutPage from "./page/AboutPage/AboutPage";
import { Navigate } from "react-router-dom";
import Details from "./page/Detail/Details";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/AboutPage" element={<AboutPage />} />
        <Route path="/InformationPage" element={<InformationPage />} />
        <Route path="/Details/:staffListId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
