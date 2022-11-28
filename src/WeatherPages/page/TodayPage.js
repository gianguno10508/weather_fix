import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/TodayPage.css";
import { useDispatch, useSelector } from "react-redux";
import { FiSun, FiWind, FiPercent, FiClock } from "react-icons/fi";
import axios from "axios";
import { FaTemperatureLow } from "react-icons/fa";
import { WiSunrise, WiSunset } from "react-icons/wi";

const Today = () => {
  const [dataWeather, setDataWeather] = useState([]);
  const state = useSelector((state) => state);
  const { weather, loading, error } = state;
  console.log(weather);
  return (
    <div className="component-today">
      <div className="right-today">
        <nav>
          <ul>
            <li>
              <Link to="/Today">Today</Link>
            </li>
            <li>
              <Link to="/Week">Week</Link>
            </li>
            <li>
              <Link to="/Hour">Hour</Link>
            </li>
          </ul>
        </nav>

      </div>
    </div>
  );
};

function getTime(time) {
  var date = new Date(time * 1000);
  var day = date.getDay();
  const options = { weekday: "long" };
  //var day = new Intl.DateTimeFormat("en-US", options).format(date);
  //var day = new Intl.DateTimeFormat("en-VN", options).format(date);
  return (
    day +
    "," +
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      //day: "numeric",
      //month: "numeric"
      //hour12: true,
    })
  );
}

export default Today;
