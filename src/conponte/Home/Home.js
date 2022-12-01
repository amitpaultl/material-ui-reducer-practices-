import React, { useReducer } from 'react';
import OurWorks from '../OurWork/OurWork';
import Banner from './Banner';
import Brands from './Barnds';
import Services from './Services';

const Home = () => {
    // reducer practices
    const initialState = 0;
    const reducer = ()=>{
        return
    }

    const [state,dispatch]= useReducer(reducer,initialState);
    return (
        <div>
            {/* reducer practices start */}
            <h2>{state}</h2>
            {/* reducer practices start */}
            <Banner></Banner>
            <Brands></Brands>
            <Services></Services>
            <OurWorks></OurWorks>
        </div>
    );
};

export default Home;