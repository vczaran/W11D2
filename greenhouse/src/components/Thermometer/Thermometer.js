import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from "react";

function Thermometer() {
  const {temp} = useClimate();
  const [temperature, setTemperature] = temp;
  const [actualTemp, setActualTemp] = useState(temperature);

  useEffect( () => {
    const timer = setTimeout( () => {
      if (actualTemp < temperature) {
        setActualTemp(actualTemp + 1)
      } else if (actualTemp > temperature) {
        setActualTemp(actualTemp - 1)
      } else {
        return () => clearTimeout(timer);
      }
    }, 1000);
  }, [{temperature}]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {actualTemp}°F</div>
      <ReactSlider
        value={temperature}
        onAfterChange={(val) => {setTemperature(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;