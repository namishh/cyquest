import { useState } from 'react';
import Calendar from 'react-calendar';
const CalAndWeather = () => {
  const [value, onChange] = useState(new Date());
  return <div className="absolute bottom-[4rem] right-[0rem]">
    <Calendar onChange={onChange} value={value} />
  </div>
}

export default CalAndWeather
