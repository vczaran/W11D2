import './ClimateStats.css';
import { useClimate } from "../../context/ClimateContext";

function ClimateStats() {
  const {temp, hum} = useClimate();
  const [humidity] = hum;
  const [temperature] = temp

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;