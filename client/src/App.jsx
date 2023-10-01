import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PirateList from './components/PirateList';
import AddPirate from './components/AddPirate';
import PirateDetails from './components/PirateDetails';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/pirates" element={<PirateList />} />
                <Route path="/pirate/new" element={<AddPirate />} />
                <Route path="/pirate/:id" element={<PirateDetails />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
