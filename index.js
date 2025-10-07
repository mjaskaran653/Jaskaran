const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public'
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`DoctorAtHome app is running on port ${port}`);
});
