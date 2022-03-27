let invitativalidi =["giovanni","luca","pasquale","anna","sara"];
console.log("carico lista invitati");
let input = prompt("inserisci il tuo nome");
for(let i=0; i<invitativalidi.length;i++){
    if(invitativalidi[i] == input){
        alert("benvenuto" , invitativalidi[i])
;    } else{
    alert("non puoi partecipare", invitativalidi[i])
}
}