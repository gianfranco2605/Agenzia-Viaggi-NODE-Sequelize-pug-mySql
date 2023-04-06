import express from "express";
import { paginaInizio, 
        paginaNoi, 
        paginaTestimoni, 
        paginaViaggi, 
        paginaDetaglioViaggi }  from "../controllers/pagineController.js";

import { diconoDiNoi } from "../controllers/diconoDiNoControlleri.js";        

const router = express.Router()

router.get('/', paginaInizio);

router.get('/noi', paginaNoi );

router.get('/viaggi', paginaViaggi );

router.get('/viaggi/:slug', paginaDetaglioViaggi );

router.get('/testimoni', paginaTestimoni);

router.post('/testimoni', diconoDiNoi);



export default router;