import { Viaggi } from '../models/Viaggi.js'
import { Testimoni  } from '../models/Testimoni.js';

const paginaInizio = async(req, res) => { // req- lo q enviamos, res lo q express nos responde

    
    
    try {
        const viaggi = await Viaggi.findAll({ limit: 3 });

    res.render("inizio", {
        pagina: 'Inicio',
        clase: 'home',
        viaggi

        });    
    } catch (error) {
        console.log(error);
    }

    
};

const paginaNoi = (req, res) => { 
    res.render("noi", { 
        pagina: 'Noi'
     });
}

const paginaViaggi = async (req, res) => { 
    //Consultar db
    const viaggi = await Viaggi.findAll();

    console.log(viaggi);

    res.render("viaggi", { 
        pagina: 'PROSSIMI VIAGGI',
        viaggi
        
     });
}
// SISTEMARE DATA BASE
const paginaTestimoni = async(req, res) => { 
    try {
        // const testimoniali = await Testimoni.findAll()
        res.render("testimoni", { 
            pagina: 'DICONO DI NOI',
            // testimoniali
        });
    } catch (error) {
        console.log(error);
        
    }
    
     
}

// Mostrare viaggio per slug
const paginaDetaglioViaggi = async (req, res) => {
    const { slug } = req.params;

    try {
        const viaggio = await Viaggi.findOne( {where : { slug }} );

        res.render('viaggio', {
            pagina: 'Informazione Viaggio',
            viaggio
        })      
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInizio,
    paginaNoi,
    paginaViaggi,
    paginaTestimoni,
    paginaDetaglioViaggi
}