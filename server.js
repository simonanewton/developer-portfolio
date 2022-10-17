const express = require("express");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") app.use(express.static("./client/build"));

app.use(routes);

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
