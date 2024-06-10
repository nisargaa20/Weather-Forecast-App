import TimeAndLocation from "./components/TimeAndLocation";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TempAndDetails from "./components/TempAndDetails";
import Forecast from "./components/Forecast";
import React from 'react'

const App = () => {
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