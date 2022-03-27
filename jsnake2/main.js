let max = parole[0];


for(var i = 0; i < parole.length; i++){
  if(parole[i].length < max.length ){
    max = parole[i];
  }
}

console.log('la parola più corta è: ' + max);
