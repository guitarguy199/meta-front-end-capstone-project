/* eslint-disable react/prop-types */
import { useState } from "react";
import FormField from "./FormField";

const BookingForm = ( { availableTimes, dispatchOnDateChange }) => {
    // const defaultTime = availableTimes[0];
    const minimumDate = new Date().toISOString().split('T')[0];
    const minimumNumGuests = 1;
    const maximumNumGuests = 16;
    const [date, setDate] = useState(minimumDate);
    const [time, setTime] = useState("12:00")
    const [numGuests, setNumGuests] = useState(minimumNumGuests);
    const [occasion, setOccasion] = useState('');
    const occasions = ["None", "Birthday", "Anniversary", "Date Night"];

    const invalidDateErrorMessage = 'Please choose a valid date';
    const invalidTimeErrorMessage = "Please choose an available time slot";
    const invalidNumGuestsErrorMessage = "Please enter the number of guests dining with us";

    const isDateValid = () => date !== '';
    const isTimeValid = () => time !== '';
    const isNumGuestsValid = () => numGuests !== '';

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatchOnDateChange({ type: 'UPDATE TIMES', payload: e.target.value});
    }

    const handleTimeChange = e => setTime(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Move to confirmation page");
        console.log("Success!");
        // clearForm();
    }

    // const clearForm = () => {
    //     setDate('');
    //     setTime('');
    //     setNumGuests('');
    //     setOccasion('');
    // }

    const getIsFormValid = () => {
        return date && availableTimes && numGuests !== '';
    };

    return(
        <form onSubmit={handleSubmit}>
                <FormField 
                label="Date"
                htmlFor="booking-date"
                hasError={!isDateValid()}
                errorMessage={invalidDateErrorMessage}
                >
                    <input 
                        type="date"
                        id="booking-date"
                        name="booking-date"
                        min={minimumDate}
                        value={date}
                        required="true"
                        onChange={handleDateChange}
                    />
                </FormField>
                <FormField 
                label="Time"
                htmlFor="booking-time"
                hasError={!isTimeValid()}
                errorMessage={invalidTimeErrorMessage}
                >
                    <select
                    id="booking-time"
                    name="booking-time"
                    value={time}
                    required={true}
                    onChange={handleTimeChange}>
                        {availableTimes.map(times => 
                        <option key={times}>
                            {times}
                        </option>
                        )}
                    </select>
                </FormField>
                <FormField
                label="# of Guests"
                htmlFor="number-of-guests"
                hasError={!isNumGuestsValid()}
                errorMessage={invalidNumGuestsErrorMessage}
                >
                    <input
                    type="number"
                    id="number-of-guests"
                    name="number-of-guests"
                    value={numGuests}
                    min={minimumNumGuests}
                    max={maximumNumGuests}
                    required={true}
                    onChange={e => setNumGuests(e.target.value)}
                    />
                </FormField>
                <FormField
                label="Special Occasion?"
                htmlFor="booking-occasion"
                >
                <select
                id="booking-occasion"
                name="booking-occasion"
                value={occasion}
                required={true}
                onChange={e => setOccasion(e.target.value)}
                >
                    {occasions.map(occasion => 
                    <option key={occasion}>
                        {occasion}
                    </option>
                    )}
                </select>
                </FormField>
                <button type="submit" className="button-primary" 
                disabled={!getIsFormValid()}
                >Make Your Reservation</button>
        </form>
    )
}

export default BookingForm;

