import { useEffect, useState } from 'react';
import LeftSide from '../LeftSide/LeftSide';
import RightSide from '../RightSide/RightSide';
import './Home.css';


function Home(){
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=5e67a511c6ee778beb5465c28aeeb4a3&units=metric`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(JSON.stringify(resJson));
            if(resJson.cod == 200){
                setCity(resJson);
            }
            else{
                setCity(null);
            }
        };
        fetchApi();
    }, [search]);

       return(       
        <div className="back">
        <div className="container text-center box">
        <div className="row">
          <div className="col">
           <LeftSide city={city} setSearch={setSearch} search={search}/>
          </div>
          <div className="col">
            <RightSide city={city}/>
          </div>
        </div>
        </div>
        </div>
        
       );

}

export default Home;