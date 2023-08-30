import { useState } from "react";

const BookingForm = () => {
    const [date, setDate] = useState('12/20/1994');
    const [time, setTime] = useState('');
    const [numGuests, setNumGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const availableTimes = ["12:30", "1:30", "2:45", "5:30", "8:45"];
    const occasions = ["none", "birthday", "anniversary"];

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

    const getIsFormValid = () => {
        return date && time && numGuests !== '';
    };

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
                        onChange={(e) => {
                            setDate(e.target.value)
                        }}
                        placeholder="Date"
                    ></input>
                </div>
                <div className="Field">
                    <label>Select Time<sup>*</sup></label>
                    <select value={time} onChange={(e) => {
                        setTime(e.target.value) 
                        }}>
                        {availableTimes.map((time, index) => 
                            <option value={time} key={index}>{time}</option>
                        )}
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
                <button type="submit" disabled={!getIsFormValid()}>Submit</button>
            </fieldset>
        </form>

        {/* </div> */}
        </section>
    )
}

export default BookingForm;

