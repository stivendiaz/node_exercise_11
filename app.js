const express = require('express');
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/Product"); 

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017/mongo-1', { useNewUrlParser: true });
app.use(express.json())


app.get('/products' ,async (req,res) => {
  const allProducts =  await Product.find({});
  res.json(allProducts);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});