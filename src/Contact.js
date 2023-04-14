import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';

import './Contact.css';

function Contact() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { name, email, message };
    const response = await fetch('https://example.com/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      console.log('Form data submitted successfully!');
    } else {
      console.error('Error submitting form data:', response.statusText);
    }
  };
  return (
    <Box className="contact-container">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="contact-field"
        />
        <TextField
          required
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="contact-field"
        />
        <TextField
          required
          label="Message"
          variant="outlined"
          margin="normal"
          multiline
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="contact-field"
        />
        <Button type="submit" variant="contained" color="primary" className="contact-button">
          Send
        </Button>
      </form>
    </Box>
  );
}

export default Contact;
