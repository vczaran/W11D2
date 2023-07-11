import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useState, useEffect } from 'react';

function Hygrometer() {
  const {hum} = useClimate();
  const [humidity, setHumidity] = hum;
  const [actualHum, setActualHum] = useState(humidity);

  useEffect( () => {
    const timer = setTimeout( () => {
      if (actualHum < humidity) {
        setActualHum(actualHum + 2)
      } else if (actualHum > humidity) {
        setActualHum(actualHum - 2)
      } else {
        return () => clearTimeout(timer);
      }
    }, 1000);
  }, [{humidity}]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {actualHum}%</div>
      <ReactSlider
        value={humidity}
        onAfterChange={(val) => {setHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;