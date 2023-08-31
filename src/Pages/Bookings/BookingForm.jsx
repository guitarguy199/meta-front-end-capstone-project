/* eslint-disable react/prop-types */
import { useState } from "react";

const BookingForm = ( { availableTimes, dispatchOnDateChange }) => {
    // const defaultTime = availableTimes[0];
    const [date, setDate] = useState('');
    const [time, setTime] = useState("12:00")
    const [numGuests, setNumGuests] = useState('');
    const [occasion, setOccasion] = useState('');
    const occasions = ["none", "birthday", "anniversary"];
    const options = availableTimes.map(time => <option key={time}>{time}</option>)

    const handleDateChange = (e) => {
        setDate(e.target.value);
        dispatchOnDateChange({ type: 'UPDATE TIMES', payload: e.target.value});
    }

    const handleTimeChange = e => setTime(e.target.value);


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Move to confirmation page");
        console.log("Success!");
        clearForm();
    }

    const clearForm = () => {
        setDate('');
        setTime('');
        setNumGuests('');
        setOccasion('');
    }

    // const getIsFormValid = () => {
    //     return date && availableTimes && numGuests !== '';
    // };

    return(
        <section className="booking-form">
        {/* <div className="grid container"> */}
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Reserve a Table</h2>
                <div className="Field">
                    <label>Select Date<sup>*</sup></label>
                    <input
                        value={date}
                        onChange={handleDateChange}
                        placeholder="Date"
                    ></input>
                </div>
                <div className="Field">
                    <label>Select Time<sup>*</sup></label>
                    <select value={time} onChange={handleTimeChange}>
                        {/* {availableTimes.map((time) => 
                            <option key={time}>{time}</option>
                        )} */}
                        {options}
                    </select>
                </div>
                <div className="Field">
                    <label>Number of Guests<sup>*</sup></label>
                    <input 
                    value={numGuests}
                    onChange={(e) =>
                        setNumGuests(e.target.value)
                        // console.log(numGuests)
                }></input>
                </div>
                <div className="Field">
                    <label>Special Occasion?</label>
                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                    {occasions.map((occasion, index) => 
                            <option value={occasion} key={index}>{occasion}</option>
                        )}
                    </select>
                </div>
                <button type="submit" className="button-primary" 
                // disabled={!getIsFormValid()}
                >Submit</button>
            </fieldset>
        </form>

        {/* </div> */}
        </section>
    )
}

export default BookingForm;

