import React, { useState } from 'react';

function AppointmentEntry() {
  const [formData, setFormData] = useState({
    patientName: '',
    doctorName: '',
    appointmentDateTime: '',
    contact: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); 

    setFormData({
      patientName: '',
      doctorName: '',
      appointmentDateTime: '',
      contact: '',
      notes: ''
    });
  };

  return (
    <div>
      <h2>Appointment Entry</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Patient Name:
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Doctor Name:
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Appointment Date and Time:
          <input
            type="datetime-local"
            name="appointmentDateTime"
            value={formData.appointmentDateTime}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Notes:
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AppointmentEntry;
