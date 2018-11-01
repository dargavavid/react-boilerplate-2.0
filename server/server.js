const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const history = require('connect-history-api-fallback');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

// Initialize body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize history api fallback
app.use(history({
  // index: '../public/index.html'
}));

// Initialize static site hosting
app.use('/', express.static(publicPath));

app.listen(port, () => {
    console.log(`Server started up at ${port}`);
});

module.exports = {app};