// prepare the express app as a server and test chart.js in html
const express = require('express');
const app = express();

// set up the view engine
app.use(express.static('public'));

// start the server and listen on port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});