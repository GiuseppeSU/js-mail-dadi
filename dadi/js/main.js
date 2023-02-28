const myButton = document.querySelector("#btn")
myButton.addEventListener("click",
    function () {
let numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log(numeroUtente)
let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log(numeroComputer)

if (numeroUtente > numeroComputer) {
    risultato = "Vinci";
    document.getElementById('result').innerHTML = 'Complimenti hai vinto';
    document.getElementById("result").classList.add('green')
} else if(numeroComputer > numeroUtente){
    risultato = "Perdi";
    document.getElementById('result2').innerHTML = 'Ritenta sarai più fortunato!';
    document.getElementById("result2").classList.add('red')
}else{
    document.getElementById('result3').innerHTML = 'Pareggio!';
    
}
})

