import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMapMarkerAlt, faThermometerHalf, faWind, faCloudSun} from  '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { faSoundcloud } from '@fortawesome/free-brands-svg-icons';

const Weather = ({weather}) => {
    const weat={
        city:'-',
         temp:'0',
          sky:'-',
          wind:'0'
        };
    if(weather.city!==undefined){
        weat.city=weather.city;
        weat.temp=weather.temp;
        weat.sky=weather.sky;
        weat.wind=weather.wind;
    }

    return (
        <div className='bg-celeste-crud text-white container-fluid d-flex justify-content-evenly'>
            <div><FontAwesomeIcon icon={faMapMarkerAlt}/> : {weat.city}</div>              
            <div><FontAwesomeIcon icon={faThermometerHalf}/> : {Math.round(weat.temp)}°</div>
            <div><FontAwesomeIcon icon={faCloudSun}/> : {weat.sky} </div>
            <div><FontAwesomeIcon icon={faWind}/> : {Math.round(weat.wind)} km/h</div>
            
            
        </div>
    );
};

export default Weather;