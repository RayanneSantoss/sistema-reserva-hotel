const express = require("express");

const router = express.Router();

const {
    listarQuartos,
    cadastrarQuarto,
    atualizarQuarto,
    deletarQuarto
} = require("../controllers/quartosControllers");


router.get("/", listarQuartos);

router.post("/", cadastrarQuarto);

router.put("/:id", atualizarQuarto);

router.delete("/:id", deletarQuarto);


module.exports = router;