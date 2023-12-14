function organizeGifts(gifts) {

    const numberArr = gifts.match(/\d+/g).map(Number);
    const letrasArr = gifts.match(/[a-zA-Z]+/g);
  
    let cadenaFinal = "";
  
    for (let j = 0; j < numberArr.length; j++) {
      let bolsa = numberArr[j];
      let cajas = Math.floor(bolsa / 10);
      let pale = Math.floor(cajas / 5);
      cajas= cajas % 5;
      bolsa= bolsa - (cajas * 10 + pale * 5 * 10);
  
  
     for (let i = 0; i < pale; i++) {
            cadenaFinal = cadenaFinal + "[" + letrasArr[j] + "]";
          }
     for (let i = 0; i < cajas; i++) {
            cadenaFinal = cadenaFinal + "{" + letrasArr[j] + "}";
          }
  
        if (bolsa != 0) {
          cadenaFinal = cadenaFinal + "(";
          for (let i = 0; i < bolsa; i++) {
            cadenaFinal = cadenaFinal + letrasArr[j];
          }
          cadenaFinal = cadenaFinal + ")";
        }
    }
  
    return cadenaFinal;
  
  
  
  
    }