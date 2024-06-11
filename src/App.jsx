import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";


import React, { useEffect } from 'react';
import getFormattedWeatherData from "./services/weather-Service";

const App = () => {

  const fetchWeather = async () => {
    const data = await getFormattedWeatherData( { q: "berlin" });
    console.log(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-grey-400 from-cyan-600 to-blue-700">
    <TopButtons />
    <Inputs />

    <TimeAndLocation />
    <TempAndDetails />
    <Forecast />
    <Forecast />

    </div>
  );
};

export default App;