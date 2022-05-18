const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').__express);

app.use("/", require("./routes/main"))
app.use("/registration", require("./routes/registration"))
app.use("/login", require("./routes/login"))
app.use("/about", require("./routes/about"))
app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);