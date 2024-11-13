import Form from "./Form";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function ReservationPage() {
  const [inputValue, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <main id='reservation-page' className='grid-3-system'>
      <div className='wrapper'>
        {/* <Form /> */}
        <BookingForm
          HandleChangeFunction={handleChange}
          InputValue={inputValue}
        />
      </div>
    </main>
  );
}
