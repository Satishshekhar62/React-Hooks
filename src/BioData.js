import React from 'react'
import { useState } from "react";


function BioData(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [city, setCity] = useState("");
    return (
        <div>
            <input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <input placeholder='Age' value={age} onChange={(e) => setAge(e.target.value)} />
            <br />
            <input placeholder='City' value={city} onChange={(e) => setCity(e.target.value)} />

            <p>Hii, {name}, your age is {age} years old. You are from {city}</p>
            
        </div>
    );
}

export default BioData;