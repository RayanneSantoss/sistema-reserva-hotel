const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;


app.use(cors());
app.use(express.json());

const routerQuarto = require("./routes/quartosRouter");
app.use('/quartos', routerQuarto);

const routerHospedes = require("./routes/hospedesRouter");
app.use('/hospedes', routerHospedes);

const routerReservas = require("./routes/reservasRouter");
app.use('/reservas', routerReservas);

app.listen(port, () => {
    console.log(`Servidor rodando em https://localhost:${port}`);
});