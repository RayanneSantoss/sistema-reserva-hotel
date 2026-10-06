const express = require("express");

const router = express.Router();

const {
    listarHospedes,
    cadastrarHospede,
    atualizarHospede,
    deletarHospede
} = require("../controllers/hospedesControllers");


router.get("/", listarHospedes);

router.post("/", cadastrarHospede);

router.put("/:id", atualizarHospede);

router.delete("/:id", deletarHospede);


module.exports = router;