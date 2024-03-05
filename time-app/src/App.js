import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [datetime, setDatetime] = useState("");
  const [timezone, setTimezone] = useState("Europe/Prague");

  useEffect(() => {
    //alert('jsem tady');
    //setDateTime("2020-11-13T22:46");
    const fetchName = async () => {
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      const data = await response.json();
      setDatetime(data.datetime);
    }

    fetchName();
  }, [timezone]);

  return (
    <div>
      Hodnota datatime: {datetime}
      <label>
        Vyberte zónu: {""}
        <select onChange={(event) => setTimezone(event.target.value)}>
          <option value="Europe/Prague">Praha</option>
          <option value="America/New_York">New York</option>
          <option value="Europe/London">Londýn</option>
          <option value="Europe/Moscow">Moskva</option>
          <option value="Asia/Hong_Kong">Hong Kong</option>
          <option value="Asia/Jerusalem">Jeruzalém</option>
        </select>
      </label>
    </div>
  )
}

export default App;
