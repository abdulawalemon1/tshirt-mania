import React, { createContext, useState } from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

export const RingContext = createContext('diamond');

const Grandpa = () => {
    // const house = 7;
    const [house, setHouse] = useState(1);
    const ornament = 'Diamond Ring';
    const handleBuyAHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount);
    }
    return (
        <RingContext.Provider value='alur ring'>
            <div className='grandpa'>
                <h4>GrandPa</h4>

                <p>house:{house} <button onClick={handleBuyAHouse}>Buy A House</button></p>
                <div style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;