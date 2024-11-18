import { useState, useReducer } from "react";
import BookingForm from "./BookingForm";
import "./ReservationPage.css";

export default function ReservationPage() {
  const [inputValue, setValue] = useState("");

  const seedRandom = (seed) => {
    const m = 2 ** 35 - 31;
    const a = 185852;
    let s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = (date) => {
    const result = [];
    let random = seedRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }

      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        return { ...state, times: fetchAPI(action.date) };
      default:
        return state;
    }
  };

  const initializeTimes = () => {
    const today = new Date();
    return { times: fetchAPI(today) };
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    console.log([...formData.entries()]);
  };

  const [state, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main id='reservation-page'>
      <div className='grid-3-system'>
        <div className='header wrapper'>
          <h2 className='h2 markazi'>Reservation</h2>
        </div>
      </div>

      <div className='grid-3-system'>
        <div className='wrapper'>
          <BookingForm
            HandleChangeFunction={handleChange}
            InputValue={inputValue}
            handleSubmit={handleSubmit}
            dispatch={dispatch}
            availableTimes={state}
          />
        </div>
      </div>
    </main>
  );
}
