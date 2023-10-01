import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPirate = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [treasureChests, setTreasureChests] = useState(0);
    const [catchPhrase, setCatchPhrase] = useState("");
    const [position, setPosition] = useState("");
    const [pegleg, setPegleg] = useState(true);
    const [eyepatch, setEyepatch] = useState(true);
    const [hookhand, setHookhand] = useState(true);
    const [errors, setErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/pirates', {
            name,
            imgUrl,
            treasureChests,
            catchPhrase,
            position,
            pegleg,
            eyepatch,
            hookhand
        })
        .then(res => {
            console.log(res);
            navigate("/pirates");
        })
        .catch(err => {
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors);
        });
    };

    return (
        <div className="container add-pirate">
            <div className="nav">
                <h1>Add Pirate</h1>
                <button onClick={() => navigate("/pirates")}>Crew Board</button>
            </div>
            <form className="user-form" onSubmit={onSubmitHandler}>
                <div>
                <div className="form-group">
                    <label>Pirate Name:</label> <br />
                    <input type="text" onChange={(e) => setName(e.target.value)} />
                    {errors.name && <p className="validation-message">{errors.name.message}</p>}
                </div>
                <div className="form-group">
                    <label>Image Url:</label> <br />
                    <input type="text" onChange={(e) => setImgUrl(e.target.value)} />
                    {errors.imgUrl && <p className="validation-message">{errors.imgUrl.message}</p>}
                </div>
                <div className="form-group">
                    <label># of Treasure Chest:</label> <br />
                    <input type="number" onChange={(e) => setTreasureChests(e.target.value)} />
                    {errors.treasureChests && <p className="validation-message">{errors.treasureChests.message}</p>}
                </div>
                <div className="form-group">
                    <label>Pirate Catch Phrases:</label> <br />
                    <input type="text" onChange={(e) => setCatchPhrase(e.target.value)} />
                    {errors.catchPhrase && <p className="validation-message">{errors.catchPhrase.message}</p>}
                </div>
                
                <div className="form-group">
                    <label>Crew Position:</label> <br />
                    <select onChange={(e) => setPosition(e.target.value)}>
                        <option value="">Select</option>
                        <option value="captain">Captain</option>
                        <option value="first mate">First Mate</option>
                        <option value="quarter master">Quarter Master</option>
                        <option value="boatswain">Boatswain</option>
                        <option value="powder monkey">Powder Monkey</option>
                    </select>
                    {errors.position && <p className="validation-message">{errors.position.message}</p>}
                </div>
                </div>
                <div className="checkbox-list">
                    <label>Peg Leg:</label>
                    <input className="checkbox" type="checkbox" defaultChecked={pegleg} onChange={(e) => setPegleg(e.target.checked)} /> <br />
                    
                    <br/>
                    <label>Eye Patch:</label>
                    <input className="checkbox" type="checkbox" defaultChecked={eyepatch} onChange={(e) => setEyepatch(e.target.checked)} /> <br />

                    <br/>
                    <label>Hook Hand:</label>
                    <input className="checkbox" type="checkbox" defaultChecked={hookhand} onChange={(e) => setHookhand(e.target.checked)} /> <br /> <br /> <br /> <br />
                    <button type="submit">Add Pirate</button>
                </div>
                
            </form>
        </div>
    );
};

export default AddPirate;
