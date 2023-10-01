import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PirateDetails = () => {
    const { id } = useParams();
    const [pirate, setPirate] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pirates/${id}`)
            .then(res => setPirate(res.data))
            .catch(err => console.log(err));
    }, [id]);

    return (
        <div className="container">
        <div className="nav">
            <h1>{pirate.name}</h1>
        </div>
        <div className="pirate-details">
            <div>
                <img src={pirate.imgUrl} alt={pirate.name} />
                <h1>{pirate.catchPhrase}</h1>
            </div>
            <div className="pirate-about">
                <h2>About</h2>
                <p>Position: {pirate.position}</p>
                <p>Treasure Chests: {pirate.treasureChests}</p>
                <p>Peg Leg: {pirate.pegleg ? "Yes" : "No"}</p>
                <p>Eye Patch: {pirate.eyepatch ? "Yes" : "No"}</p>
                <p>Hook Hand: {pirate.hookhand ? "Yes" : "No"}</p>
            </div>
        </div>
    </div>
    );
};

export default PirateDetails;
