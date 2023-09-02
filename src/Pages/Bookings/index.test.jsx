import {describe, expect, test} from 'vitest';
import {render, screen, fireEvent } from '@testing-library/react';
import Bookings from './';
import { MemoryRouter } from 'react-router-dom';

describe("Booking Page", () => {

    test("Should show title", () => {
        render(
            <MemoryRouter>
                <Bookings />
            </MemoryRouter>
        );
        expect(screen.getByText("Reserve a Table")).toBeInTheDocument();
    });

    test("should return expected value", async () => {
        render(
            <MemoryRouter>
                <Bookings />
            </MemoryRouter>
        );
        const timeOptions = await screen.findAllByTestId("booking-time-option");
        expect(timeOptions.length).toBeGreaterThanOrEqual(1);
    });

    test("should update available booking time options when booking date is changed", async () => {
        render(
            <MemoryRouter>
                <Bookings />
            </MemoryRouter>
        );

        const bookingDate = '2023-09-03';
        const dateInput = screen.getByLabelText(/Date/);
        const intialAvailableTimes = await screen.findAllByTestId('booking-time-option');
        fireEvent.change(dateInput, { target: { value: bookingDate }})
        fireEvent.blur(dateInput);
        const updatedAvailableTimes = await screen.findAllByTestId('booking-time-option');

        expect(dateInput).toHaveValue(bookingDate);
        expect(intialAvailableTimes.length).toBe(updatedAvailableTimes.length);

    })
})