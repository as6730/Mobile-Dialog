const express = require("express");
const app = express();
const cors = require('cors');

app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies
app.use(cors())

app.post('/submit', function(req, res) {
    let email = req.body.email;
    
    console.log(JSON.stringify(req.body))

    res.send('Success!')
});

app.listen(3001, () => {
 console.log("Server running on port 3001");
});
