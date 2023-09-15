import React, { useState} from 'react';
import DatePicker from 'react-datepicker';
import TimePicker from 'react-time-picker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-time-picker/dist/TimePicker.css';
import './App';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [chosenDateTime, setChosenDateTime] = useState(null);
  


  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    if (selectedDate && selectedTime) {
      const dateTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      dateTime.setHours(parseInt(hours, 10));
      dateTime.setMinutes(parseInt(minutes, 10));
      setChosenDateTime(dateTime);
    } else {
      alert('Please select a date and time.');
    }
  };

  const handlePrint = () => {
    window.print(); // This will trigger the browser's print dialog
  };

  return (
    <div className='date-time-picker' >
      <button className='date-time-picker' onClick={handlePrint}>Print Page</button>
      <h2 className='date-time-picker'>Choose Date and Time</h2>
      <div className='time-picker'> 
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a date"
      />
      </div>
      <div className = 'time-picker'>
      <TimePicker
        value={selectedTime}
        onChange={handleTimeChange}
        timeFormat="hh/mm:ss"
        disableClock={true}
      />
      </div>
      <button className='date-time-picker' onClick={handleSubmit}>Submit</button>

      {chosenDateTime && (
        <div>
          <h3>Chosen Date and Time:</h3>
          <p>{chosenDateTime.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default DateTimePicker;