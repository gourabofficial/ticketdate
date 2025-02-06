document.addEventListener('DOMContentLoaded', function() {
    const journeyDateInput = document.getElementById('journeyDate');
    const resultElement = document.getElementById('result');
    const dateForm = document.getElementById('dateForm');

    flatpickr(journeyDateInput, {
        dateFormat: "Y-m-d",
        allowInput: true, 
        theme: "dark", 
        defaultHour: 8, 
        defaultMinute: 0, 
        onOpen: function(selectedDates, dateStr, instance) {
            const calendar = document.querySelector('.flatpickr-calendar');
            if (calendar) {
                calendar.style.transform = "scale(1.2)"; // Scale the calendar up when opened
            }

            // Add Clear and Close text elements
            const clearText = document.createElement('span');
            clearText.textContent = 'Clear';
            clearText.classList.add('flatpickr-clear');
            clearText.style.cursor = 'pointer';
            clearText.style.marginRight = '10px';
            clearText.addEventListener('click', function() {
                instance.clear();
            });

            const closeText = document.createElement('span');
            closeText.textContent = 'Close';
            closeText.classList.add('flatpickr-close');
            closeText.style.cursor = 'pointer';
            closeText.addEventListener('click', function() {
                instance.close();
            });

            const buttonContainer = calendar.querySelector('.flatpickr-button-container');
            if (!buttonContainer) {
                const newButtonContainer = document.createElement('div');
                newButtonContainer.classList.add('flatpickr-button-container');
                newButtonContainer.appendChild(clearText);
                newButtonContainer.appendChild(closeText);
                calendar.appendChild(newButtonContainer);
            }
        },
        onChange: function(selectedDates, dateStr, instance) {
            if (selectedDates.length > 0) {
                const journeyDate = new Date(selectedDates[0]);

                const bookingDate = new Date(journeyDate);
                bookingDate.setDate(journeyDate.getDate() - 60);
                bookingDate.setHours(8, 0, 0, 0); // Set time to 8 AM
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

    dateForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const journeyDateInput = document.getElementById('journeyDate').value;
        const journeyDate = new Date(journeyDateInput);

        const bookingDate = new Date(journeyDate);
        bookingDate.setDate(journeyDate.getDate() - 60);
        bookingDate.setHours(8, 0, 0, 0); // Set time to 8 AM
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
    });
});