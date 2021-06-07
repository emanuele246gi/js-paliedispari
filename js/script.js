// Primo dado
var primo = prompt('Scegli un numero tra 1 e 5');

// Secondo dado
var secondo = Math.floor(Math.random() * 5 + 1);

// Risultato
sum = primo + secondo;

// Numeri pari o dispari
function evenodd(x){
    if (x % 2 == 0){
        return "pari";
    }

    else {
        return "dispari";
    }
}

var risultato;

if (primo > secondo){
    risultato = 'Vittoria!';
}

else if (primo < secondo){
    risultato = 'Ritenta!';
}

else{
    risultato = 'Pareggio!';
}

document.getElementById('primo').innerHTML += primo;
document.getElementById('secondo').innerHTML += secondo;
document.getElementById('risultato').innerHTML = risultato;