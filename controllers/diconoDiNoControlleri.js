import { Testimoni } from "../models/Testimoni.js"; 



const diconoDiNoi = async (req, res) => {

    // Validazione
    const { nome, mail, messaggio} = req.body;

    const errore = []

    if(nome.trim() === '') {
        errore.push({messaggio : 'Il nome e vuoto'});
    }

    if(mail.trim() === '') {
        errore.push({messaggio : 'La mail e vuota'});
    }

    if(messaggio.trim() === '') {
        errore.push({messaggio : 'Il messaggio e vuoto'});
    }

    if(errore.length > 0) {
        // SISTEMARE DATABASE
        // const testimoniali = await Testimoni.findAll()
        //Show vista errori
        res.render('testimoni', {
            pagina: 'DICONO DI NOI',
            errore,
            nome,
            mail,
            messaggio
            // testimoniali
        })        
    } else {
        //Salvare nella DB

        try {
            await Testimoni.create({
                nome,
                mail,
                messaggio
            });
            res.redirect('/testimoni')
        } catch (error) {
            console.log(errore);
        }
    }
}

export {
    diconoDiNoi
}