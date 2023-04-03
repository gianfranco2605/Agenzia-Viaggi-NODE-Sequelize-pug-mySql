import express from "express";

const router = express.Router()

router.get('/', (req, res) => { // req- lo q enviamos, res lo q express nos responde
    res.render("inizio", {
        pagina: 'Inicio'
    });
});

router.get('/noi', (req, res) => { 
    res.render("noi", { 
        pagina: 'Noi'
     });
});

router.get('/viaggi', (req, res) => { 
    res.render("noi", { 
        pagina: 'Viaggi'
     });
});

router.get('/testimoni', (req, res) => { 
    res.render("noi", { 
        pagina: 'Testimoni'
     });
});



export default router;