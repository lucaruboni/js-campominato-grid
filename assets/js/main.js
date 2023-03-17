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

const difficult = document.querySelector('.difficoltà')
console.log(difficult)

const difficultEl = document.querySelector('.difficoltà_niente');
console.log(difficultEl)

const difficultNoobEl = document.querySelector('.difficoltà_1');
console.log(difficultNoobEl)

const difficultSundayEl = document.querySelector('.difficoltà_2');
console.log(difficultSundayEl)

const difficultMlgEl = document.querySelector('.difficoltà_3');
console.log(difficultMlgEl)


//creo l'eventlistener al click

difficultNoobEl.addEventListener('click', function(){
    console.log('Difficoltà nabbone')
    
    return true
})


difficultSundayEl.addEventListener('click', function(){
    console.log('Difficoltà giocatore della domenica')
    
    return true
})

difficultMlgEl.addEventListener('click', function(){
    console.log('Difficoltà pro mlg')
    
    return true
})

// dopo che ho scelto l'opzione devo fare in modo che il bottone decida che griglia creare in base alla selezione della difficoltà

//seleziono il bottone nella dom


const btnElement = document.querySelector('button')

//event listener al click del btn che crea la griglia

btnElement.addEventListener('click', function(){
   
    if ( difficultSundayEl === true) {
           //seleziono il contenitore delle mie celle
    const container = document.querySelector(".row");


    let maxCellsNumber = 80
    
    //ciclo per creare le celle
    
    for (let i = 0; i < maxCellsNumber; i++) {
    
        const cell = `<div class="cell active">${Number([i + 1])}</div>`
        console.log(cell)
        container.innerHTML += cell
        
    }
    
    

// quando clicco su una cella me la colora


const cells = document.querySelectorAll('.cell.active')
console.log(cells)

for (let i = 0; i < cells.length; i++){
    const cellSelected = cells[i];
    console.log(cellSelected)
    cellSelected.addEventListener('click', function(){

        this.classList.toggle('bg_black')
        
        console.log(`You clicked cell n° ${Number([i + 1])}`)
})
   
}
    }
   //seleziono il contenitore delle mie celle
    const container = document.querySelector(".row");


    let maxCellsNumber = 100
    
    //ciclo per creare le celle
    
    for (let i = 0; i < maxCellsNumber; i++) {
    
        const cell = `<div class="cell active">${Number([i + 1])}</div>`
        console.log(cell)
        container.innerHTML += cell
        
    }
    
    

// quando clicco su una cella me la colora


const cells = document.querySelectorAll('.cell.active')
console.log(cells)

for (let i = 0; i < cells.length; i++){
    const cellSelected = cells[i];
    console.log(cellSelected)
    cellSelected.addEventListener('click', function(){

        this.classList.toggle('bg_black')
        
        console.log(`You clicked cell n° ${Number([i + 1])}`)
})
   
}

})




