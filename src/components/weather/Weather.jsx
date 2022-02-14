import React from 'react';

const Weather = ({city, temp}) => {
    return (
        <div className='bg-celeste-crud text-white container d-flex justify-content-evenly'>
            <div>Ciudad: {city}</div>
            <div>Temp.: {temp}°</div>
            <div>pruba3</div>
        </div>
    );
};

export default Weather;