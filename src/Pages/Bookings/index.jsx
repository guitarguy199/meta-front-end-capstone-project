import { useReducer } from "react";
import BookingForm from "./BookingForm";
import './index.css';

const Bookings = () => {


    const updateTimes = () => {
        return ["5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00"];
    }

   const initializeTimes = () => {
    return ["5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00"];
   };

   function reducer(state, action) {
    switch (action.type) {
      case 'UPDATE_TIMES':
        return updateTimes(action.payload);
      default:
        return state;
    }
  }


  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());
    return (
        <div className="bookings">
            <h2>Reserve a Table</h2>
            <BookingForm availableTimes={availableTimes} dispatchOnDateChange={dispatch} />
        </div>
    )
}

export default Bookings;