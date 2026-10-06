const express = require("express");

const router = express.Router();

const {
    listarReservas,
    cadastrarReserva,
    atualizarReserva,
    deletarReserva
} = require("../controllers/reservasControllers");


router.get("/", listarReservas);

router.post("/", cadastrarReserva);

router.put("/:id", atualizarReserva);

router.delete("/:id", deletarReserva);


module.exports = router;