import { useReducer } from "react";
import BookingForm from "./BookingForm";
import './index.css';

const Bookings = () => {

    const dates = ["12:30", "3:30", "5:00"]

    const updateTimes = (date) => {
        return date;
    }

    const initializeTimes = dates;

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);


    return (
        <>
            <BookingForm availableTimes={availableTimes} setAvilableTimes={dispatch} />
        </>
    )
}

export default Bookings;