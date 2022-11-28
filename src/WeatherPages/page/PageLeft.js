import "./css/pageleft.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import weatherSVG from "../img/weather.svg";
import {
  fetchWeather7Action,
  fetchWeatherAction,
} from "../redux/slices/weatherslices";
import axios from "axios";
import { URL_Location } from "../redux/slices/Api";


//display icon https://openweathermap.org/img/wn/${icon}.png
export const Search = () => {
  const [lat, setLat] = useState("21.0294498");
  const [lon, setLon] = useState("105.8544441");
  const [dataWeather, setDataWeather] = useState([]);
  const [location, setLocation] = useState("Thai Nguyen");

  const state = useSelector((state) => state);
  const { weather, loading, error } = state;

  const dispatch = useDispatch();
  useEffect(()=>{
    axios.get(URL_Location, {
      params: {
        q: location,
        units: "Metric",
        lang: "en",
      },
    }).then(function(response){
      if(response.data.coord){
        dispatch(fetchWeatherAction(response.data.coord));
      }
    });
  },[location])
  //
  return (
    <div className="Container">
      <section className="Page-left">
        <div className="input-buttom">
          {/* Input */}
          <input
            type="text"
            //value={location}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                setLocation(event.target.value);
                
              }
            }}
            placeholder="Search City"
            className="search-left"
          ></input>
        </div>
      </section>
    </div> 
  );
};

export default Search;
