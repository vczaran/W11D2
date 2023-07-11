import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  const theme = useTheme();
  
  if (theme.themeName === "day") {
  return (
    <section>
      <img  className='greenhouse-day-img'
            src={dayImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  )} else {
    return (
      <section>
      <img  className='greenhouse-night-img'
            src={nightImage}
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
    )
  }
}

export default Greenhouse;