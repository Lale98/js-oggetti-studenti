// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all'utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell'ordine: nome, cognome e età.

var primoStudente = {
    nome : 'Alessandro',
    cognome : 'Cacace',
    eta : 22
}

for (var chiave in primoStudente) {
    console.log(primoStudente[chiave]);
}
// ------------------------------------------------------------------------------------------

var studenti = [
{
    nome : 'Alessandro',
    cognome : 'Cacace',
    eta : 22
},
{
    nome : 'Dario',
    cognome : 'Rossi',
    eta : 26
},
{
    nome : 'Marta',
    cognome : 'Bianchi',
    eta : 19
},
{
    nome : 'Daniela',
    cognome : 'Gialli',
    eta : 24
},
]

for (var i = 0; i < studenti.length; i++) {
    
    console.log(studenti[i].nome + ' '+ studenti[i].cognome);
    document.getElementById('listaNomi').innerHTML += '<li>'+ studenti[i].nome + ' '+ studenti[i].cognome + '</li>';
}

document.getElementById('pulsante').addEventListener('click', nuovoUtente);



function nuovoUtente () {
        var nuovoStudente = {
        nome : prompt('inserisci il tuo nome'),
        cognome : prompt('inserisci il tuo cognome'),
        eta : prompt('quanti anni hai?')
    }
    studenti.push(nuovoStudente);
    document.getElementById('listaNomi').innerHTML += '<li>'+ nuovoStudente.nome + ' '+ nuovoStudente.cognome + '</li>';

    return nuovoStudente;
}


