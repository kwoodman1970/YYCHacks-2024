import React,{ useState } from 'react'
import Home from './Home'
import './App.css'
import { LanguageProvider } from './contexthooks/useLanguages'
import { LocationProvider } from './contexthooks/useLocation'
import {LayersProvider} from "@/src/contexthooks/useLayers.jsx";
import Navbar from '@/components/shared/navbar.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IdleScreen from './IdleScreen'


function App() {

  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<IdleScreen />}></Route>
       <Route path="/main" element={<Home />}></Route>
    </Routes>
    </BrowserRouter>


  )
}

export default App
