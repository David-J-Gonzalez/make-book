const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({ origin: true, credentials: true }));
app.get('/', (req, res) => res.send('Hello world!'));

const conn_str = 'mongodb+srv://djgonzalez0209:5RZbthKB1xAY8RAl@cluster0.j5ybklc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str, {})
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('MongoDB Connection Succeeded...');
  })
  .catch(err => {
    console.log(`Error in DB Connection ${err}`);
  });