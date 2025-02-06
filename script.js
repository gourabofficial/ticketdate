document.addEventListener('DOMContentLoaded', function() {
    const journeyDateInput = document.getElementById('journeyDate');
    const resultElement = document.getElementById('result');

    flatpickr(journeyDateInput, {
        dateFormat: "Y-m-d",
        allowInput: true,
        theme: "dark",
        defaultHour: 8,
        defaultMinute: 0,
        onOpen: function(selectedDates, dateStr, instance) {
            const calendar = document.querySelector('.flatpickr-calendar');
            if (calendar) {
                if (window.innerWidth <= 600) {
                    calendar.style.transform = "scale(1)"; // No scaling on mobile
                } else {
                    calendar.style.transform = "scale(1.2)"; // Scale the calendar up when opened
                }
            }
        },
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                const journeyDate = new Date(selectedDates[0]);
                const bookingDate = new Date(journeyDate);
                bookingDate.setDate(journeyDate.getDate() - 60);
                bookingDate.setHours(8, 0, 0, 0);
                const formattedBookingDate = bookingDate.toLocaleString('en-GB', { 
                    weekday: 'short', 
                    day: '2-digit', 
                    month: 'short', 
                    year: 'numeric', 
                    hour: '2-digit', 
                    minute: '2-digit', 
                    hour12: true 
                });

                resultElement.textContent = `Booking Starts on: ${formattedBookingDate}`;
                resultElement.classList.add('highlight');
            }
        }
    });
});