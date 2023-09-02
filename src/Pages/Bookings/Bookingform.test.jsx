import { describe, expect, test, vi} from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { MemoryRouter } from 'react-router-dom';


describe('Booking form', () => {
    const mockFormSubmit = vi.fn();
    const mockDispatchOnDateChange = vi.fn();
    const availableTimes = ["12:00", "1:00", "2:00"];
    const today = new Date().toISOString().split('T')[0];

test('renders BookingForm Component', () => {


    render(
        <BookingForm
        submitData={mockFormSubmit}
        availableTimes={availableTimes}
        dispatchOnDateChange={mockDispatchOnDateChange}
        />
    )

    const dateLabel = screen.getByText("Date");
    expect(dateLabel).toBeInTheDocument();
})

test('should render all fields and their default values', async () => {

    render (
        <BookingForm availableTimes={availableTimes} submitData={mockFormSubmit} />
    )

    const dateInput = screen.getByLabelText(/Date/);
    const timeInput = screen.getByLabelText(/Time/);
    const numGuestInput = screen.getByLabelText(/Number of Guests/);
    const timeOptions = await screen.findAllByTestId("booking-time-option");
    const occasionSelect = screen.getByLabelText(/Special Occasion?/);
    const occasionOptions = await screen.findAllByTestId('occasion-option');
    const submitButton = screen.getByRole('button');

    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'booking-date');
    expect(dateInput).toHaveValue(today);

    expect(timeInput).toBeInTheDocument();
    expect(timeInput).toHaveAttribute('id', 'booking-time');
    expect(timeOptions.length).toBe(3);

    expect(numGuestInput).toBeInTheDocument();
    expect(numGuestInput).toHaveAttribute('id', 'number-of-guests');
    expect(numGuestInput).toHaveAttribute('type', 'number');
    expect(numGuestInput).toHaveValue(1);

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'booking-occasion');
    expect(occasionOptions.length).toBe(4);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled;
})

test('should successfully submit booking form with default values', () => {
    render(
        <BookingForm availableTimes={availableTimes} submitData={mockFormSubmit} />
        );

        const submitButton = screen.getByRole('button');
        fireEvent.click(submitButton);

        expect(mockFormSubmit).toHaveBeenCalledWith({
            date: today,
            time: availableTimes[0],
            numGuests: 1,
            occasion: 'None',
        })
    });

test('should display an error message and disable submit button when date field is empty', () => {
    render(
        <MemoryRouter>
          <BookingForm availableTimes={availableTimes} dispatchOnDateChange={mockDispatchOnDateChange} submitData={mockFormSubmit} />
        </MemoryRouter>
    )

    const dateInput = screen.getByLabelText(/Date/);
    fireEvent.change(dateInput, { target: {value: '' } });
    fireEvent.blur(dateInput);
    const errorMsg = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg).toHaveTextContent('Please choose a valid date');
    expect(submitButton).toBeDisabled();
})

test(
    `should display an error message and disable sumbit button when number of  
    guests field's value is empty`, () => {
    render(
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnDateChange={mockDispatchOnDateChange} 
        submitData={mockFormSubmit} 
      />
    );

    const numberOfGuestsInput = screen.getByLabelText(/Number of Guests/);
    fireEvent.change(numberOfGuestsInput, { target: { value: '' } });
    fireEvent.blur(numberOfGuestsInput);
    const errorMessage = screen.getByTestId('error-message');
    const submitButton = screen.getByRole('button');

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Please enter the number of guests dining with us');
    expect(submitButton).toBeDisabled();
  });

});