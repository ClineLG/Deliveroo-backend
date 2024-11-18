const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(cors());
require("dotenv").config();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      "https://lereacteur-bootcamp-api.herokuapp.com/api/deliveroo/menu/paris/3eme-temple/sub-arc-subway-rambuteau?day=today&geohash=u09wj8rk5bqr&time=ASAP",
      {
        headers: {
          Authorization: `Bearer ${process.env.TOKEN}`,
        },
      }
    );
    // console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    res.status(500).json({ messge: error.message });
  }
});

app.listen(process.env.PORT, () => {
  console.log("Server Strarted 🍔");
});
