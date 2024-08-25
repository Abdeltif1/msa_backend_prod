const express = require('express')

const cors = require('cors');

const PrayerRouter = require("./routes/prayers.route");

const app = express();

const port = 5000;

app.use(cors());

app.use(express.json());

app.use("/api/prayers", PrayerRouter);

app.get('/', (req, res) => {
  res.send('MSA app!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})