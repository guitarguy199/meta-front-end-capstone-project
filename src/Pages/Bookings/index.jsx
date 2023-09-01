import { useReducer } from "react";
import BookingForm from "./BookingForm";
import './index.css';
import { fetchAPI, submitAPI } from "../../utils/FakeAPI";
import { useNavigate } from "react-router-dom";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
};

const initializeTimes = (initialAvailableTimes) => [
    ...initialAvailableTimes,
    ...fetchAPI(new Date()),
];

const Bookings = () => {
    const navigate = useNavigate();

    const [availableTimes, dispatchOnDateChange] = useReducer(
        updateTimes,
        [],
        initializeTimes
)
      const submitData = (formData) => {
          const response = submitAPI(formData);
          if (response) navigate("/confirmation");
      }
    return (
        <div className="bookings">
            <h2>Reserve a Table</h2>
            <BookingForm 
            availableTimes={availableTimes} 
            dispatchOnDateChange={dispatchOnDateChange} 
            submitData={submitData} />
        </div>
    )
}

export default Bookings;