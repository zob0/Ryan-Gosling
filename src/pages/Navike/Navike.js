import "./Navike.css";
import React, { useState } from "react";
import navike from "../../data/navike";
import Navika from "../../components/Navika";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarContainer.css";

function Navike() {
  const [noveNavike, setNoveNavike] = useState(navike);

  const handleAdd = () => {
    let tekst = document.getElementsByClassName("input-upisi")[0].value;
    setNoveNavike([...noveNavike, { text: tekst, checked: false }]);
  };

  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };

  const isToday = (dateToCheck) => {
    const today = new Date();
    return (
      dateToCheck.getDate() === today.getDate() &&
      dateToCheck.getMonth() === today.getMonth() &&
      dateToCheck.getFullYear() === today.getFullYear()
    );
  };

  const tileClassName = ({ date, view }) => {
    if (isToday(date)) {
      return "today";
    }
    return null;
  };
  return (
    <div className="obvijac">
      <div className="calendar-container">
        <Calendar
          onChange={onChange}
          value={date}
          tileClassName={tileClassName}
        />
      </div>
      <div className="Navike">
        <div className="n-upisi">
          <p className="p-upisi">Upisi:</p>
          <input className="input-upisi" type="text"></input>
        </div>

        <button className="n-dugmic" onClick={handleAdd}>
          <p className="n-btn-tekst">Generisi</p>
        </button>
        {noveNavike.map((n) => {
          return <Navika navika={n} />;
        })}
      </div>
    </div>
  );
}

export default Navike;
