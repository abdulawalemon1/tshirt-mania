import React from 'react';
import useTShirts from '../../hooks/useTShirts';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tShirts, setTShirts] = useTShirts();
    return (
        <div className='home-container'>
            <div className='tshirt-container'>
                {
                    tShirts.map(tShirt => <Tshirt
                        key={tShirt.id}
                        tShirt={tShirt}
                    ></Tshirt>)
                }
            </div>
            <div className='cart-container'>
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;