/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */


/* Creare al click di un bottone una griglia 10x10.
Ogni volta che clicco su un quadrato questo si colora */


//seleziono i valori delle difficoltà






// dopo che ho scelto l'opzione devo fare in modo che il bottone decida che griglia creare in base alla selezione della difficoltà

//seleziono il bottone nella dom




    const level = document.querySelector('form')
    
    
    level.addEventListener('submit', function(e){
        
    e.preventDefault()      
    
    //select the game level

    //function to select the level

    const maxCells = selectLevel(level.value)

    //generate the game field

    const fieldEl = document.querySelector('.row')



    generateField(maxCells, fieldEl)
    
    })





    //funzione per selezionare il livello

    function selectLevel(level){

    //se non viene selezionato un numero allora lo traformo in numero per renderlo leggibile da js

    if(typeof level !== Number){
        
        level = Number(level)
    }

    let maxCells; 

//definisco i livelli 

switch (level) {
    case 1:
        maxCells = 100
        
        break;
    case 2:
        maxCells = 81    

    case 3:
        maxCells = 49

    default:
        maxCells = 100

        break;
}

    //ritorno il numero massimo di celle

    return maxCells
}


//funzione per generare la singola cella

function generateCell(number, maxCells){

    //creo la cella nella dom

    const cell = document.createElement('div')
    //do una classe alla cella
    cell.className = 'cell'
    //aggiungo il numero all'interno della cella
    cell.textContent = number

    //definisco la grandezza del campo da gioco

    cell.style.width = `calc(100% / ${Math.sqrt(maxCells)})`


    //event listener per colorare la cella al click

    cell.addEventListener('click', function(e){
        
        //seleziono la cella cliccata
        e.target.classList.toggle('active')

        //loggo il numero corrispondente alla cella cliccata in console
        console.log(e.target.textContent)
    })

    //ritorno la cella

    return cell

}





//funzione per generare il campo da gioco


function generateField(maxCells, domEl){

    //svuoto il contenuto della pagina 
    domEl.innerHTML = ''


    //creo il ciclo per generare le celle in base al livello selezionato

    for (let i = 1; i <= maxCells; i++){
        domEl.insertAdjacentElement('befooreend', generateCell(i, maxCells))
    }
}



