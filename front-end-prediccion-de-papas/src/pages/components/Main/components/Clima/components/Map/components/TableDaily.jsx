import axios from "axios";
import React, { useEffect, useState } from "react";

export const TableDaily = ({ city }) => {
  // console.log("la ciudad ingrsada es ,  : " + city);
  const [weatherData, setWeatherData] = useState([]);

  const APIKey = "c34e5300156b6ed973d2421c25421b56";

  const getWeather = async (cityName) => {
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIKey}&units=metric`;
    try {
      const response = await axios.get(queryURL);
      // console.log(response.data);
      setWeatherData(response.data.list);
      return response.data;
    } catch (error) {
      console.error("Unable to connect", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await getWeather(city);
      // console.log("los datos recuperados son:", res);
    };

    fetchData();
  }, [city]);

  return (
    <div>
      <h3 className="text-lg font-bold mb-2">Prediccion Diaria</h3>
      <div className=" relative max-h-[250px] overflow-y-auto ">
        <table className="table table-xs w-full ">
          <thead className="sticky top-0 bg-white z-10">
            <tr>
              <th className="text-black">Fecha</th>
              <th className="text-black">Temperatura (°C)</th>
              <th className="text-black">Humedad (%)</th>
              <th className="text-black">Presión (hPa)</th>
              <th className="text-black">Velocidad del Viento (m/s)</th>
            </tr>
          </thead>
          <tbody>
            {weatherData.map((item, index) => (
              <tr key={index}>
                <td className="text-black">
                  {new Date(item.dt * 1000).toLocaleString()}
                </td>
                <td className="text-black">{item.main.temp}°C</td>
                <td className="text-black">{item.main.humidity}%</td>
                <td className="text-black">{item.main.pressure} hPa</td>
                <td className="text-black">{item.wind.speed} m/s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
