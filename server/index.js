// Backend Server Entry Point file for express server.

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Backend server started on port ${PORT}, Press ctrl+c to end `);
});
