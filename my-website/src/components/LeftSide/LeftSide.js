import './LeftSide.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


const LeftSide = ({city,setSearch}) => {
   
    return (
        <>
            <h2 style={text-a}>Weather App <i className="fa-solid fa-cloud-bolt"></i></h2>
            <nav className="navbar bg-body-tertiary container">
                <div className="container-fluid">

                    <input className="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    onChange={ (event) => { setSearch(event.target.value) } }/>

                

                </div>
            </nav>

            <button type="button" className="btn btn-primary btn">My Location</button>

            {!city ? (
                <p>No Data Found</p>
            ) : (
                <div className="info">
                    <h2 className="location">
                        <i className="fa-solid fa-cloud-sun icon"></i>
                    </h2>
                    <h1 className="city">
                        {city.name}
                    </h1>
                    <h1 className="temp">
                        {city.main.temp}°C
                    </h1>
                    <h6 className="text">Few Clouds</h6>
                    <h5 className="city"></h5>
                    <hr />
                    <h5 className="calc">Min Temp: {city.main.temp_min}°C | Max Temp: {city.main.temp_max}°C</h5>
                </div>
            )

            }


        </>
    );
}

export default LeftSide;