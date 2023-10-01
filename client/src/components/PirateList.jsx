import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate } from "react-router-dom";


const PirateList = () => {
    const [pirates, setPirates] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pirates")
            .then(res => setPirates(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/pirates/${id}`)
            .then(() => setPirates(pirates.filter(pirate => pirate._id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div>
        <div className="nav">
            <h1>Pirate Crew</h1>
            <button onClick={() => navigate("/pirate/new")}>Add Pirate</button>
        </div>
        <div className='pirate-list'>
        {pirates.map(pirate => (
            <div key={pirate._id} className="pirate-box">
                <h2>{pirate.name}</h2>
                <img src={pirate.imgUrl} alt={pirate.name} width="100" />
                <div>
                <button onClick={() => navigate("/pirate/" + String(pirate._id))}>
                      View Pirate
                    </button>
                <button onClick={() => handleDelete(pirate._id)} style={{backgroundColor: "red"}}>Walk the Plank</button>
                
                </div>
            </div>
            ))}
            </div>
        </div>
    );
};

export default PirateList;
