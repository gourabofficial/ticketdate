document.addEventListener('DOMContentLoaded', function() {
  const maxDateElement = document.getElementById('maxDate');
  const dateForm = document.getElementById('dateForm');
  const resultElement = document.getElementById('result');
  const journeyDateInput = document.getElementById('journeyDate');

  const today = new Date();
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 60);
  const formattedMaxDate = maxDate.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  maxDateElement.textContent = formattedMaxDate;

  flatpickr(journeyDateInput, {
      dateFormat: "Y-m-d",
      allowInput: true, 
      theme: "dark", 
      onOpen: function() {
          const calendar = document.querySelector('.flatpickr-calendar');
          if (calendar) {
              calendar.style.transform = "scale(1.2)";  //scale the calendar
          }
      }
  });

  dateForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const journeyDateInput = document.getElementById('journeyDate').value;
      const journeyDate = new Date(journeyDateInput);

      const bookingDate = new Date(journeyDate);
          bookingDate.setDate(journeyDate.getDate() - 60);
    bookingDate.setHours(8, 0, 0, 0); //time  8:00 AM
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
  });


    
    
  
});
