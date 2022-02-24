const myUl = document.getElementById("genera");

let indice;
let classe;

// Inizializzo ciclo for
for (let i = 1; i < 101; i++){
    // inserisco le condizioni
    if((i % 3 == 0 ) && (i % 5 == 0)){
        indice = "Fizz Buzz";
        // parole rosse
        classe = "fizz-buzz";
        /*console.log("Fizz Buzz");*/
    }
    else if (i % 3 == 0){
        indice = "Fizz";
        // parole blu
        classe = "fizz";
        /*console.log("Fizz");*/
    } else if (i % 5 == 0){
        indice = "Buzz";
        // parole verdi
        classe = "buzz";
        /*console.log("Buzz");*/
    } else{
        indice = i;
        // parole nere
        classe = "normale";
        /*console.log(i);*/
    }
    // Scrivo nel tag "li" le parole Fizz e attribuisco una classe  
    const myElement = `<li class= "box box--${classe}">${indice}</li>`;
    myUl.innerHTML += myElement;
}