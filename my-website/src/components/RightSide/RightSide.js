import './RightSide.css';
import { useState } from 'react';


const RightSide = ({city}) => {
   
    return(
       <>
          {!city ?(
            <p>No Data Found</p>
        ) : (
        
            <div className="right">

       <h5 className="long">
       Longitude: {city.coord.lon}
       </h5>

       <h5 className="lati">
        Latitude: {city.coord.lat}
       </h5>
       
       <h5 className="pressure">
        Pressure: {city.main.pressure}
        </h5>

        <h5 className="humidity">
        Humidity: {city.main.humidity}
        </h5>
       
       <h5 className="level1">
        Sea Level: {city.main.sea_level}
       </h5>
       
       <h5 className="level2">
        Ground Level: {city.main.grnd_level}
        </h5>
       
       <h5 className="visi">
       Visibility : {city.main.visibilty}
       </h5>
       
       <h5 className="speed">
       Wind Speed: {city.wind.speed}
       </h5>
       
       <h5 className="country">
       Country: {city.sys.country}
       </h5>
       
       <h5 className="rise">
       Sunrise: {city.sys.sunrise}
       </h5>
       
       <h5 className="set">
       Sunset: {city.sys.sunset}
       </h5>
       

       </div>
       
        )
      
}
       </>
        
    );
}

export default RightSide;
