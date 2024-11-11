import Form from "./Form";
import { useFormContext } from "react-hook-form";

export default function ReservationPage() {
  return (
    <main id='reservation-page' className='grid-3-system'>
      <div className='wrapper'>
        <Form />
      </div>
    </main>
  );
}
