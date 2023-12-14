function organizeGifts(gifts) {
    let numberArr = [];
    let letrasArr = [];
    let cadenaNum = "";
  
    // Separar en arrays números y letras
    for (let i = 0; i < gifts.length; i++) {
      if (!isNaN(gifts[i])) {
        cadenaNum += gifts[i];
      } else {
        if (cadenaNum !== "") {
          numberArr.push(parseInt(cadenaNum));
          cadenaNum = "";
        }
        letrasArr.push(gifts[i]);
      }
    }
  
    // Asegurarse de agregar el último número después del bucle
    if (cadenaNum !== "") {
      numberArr.push(parseInt(cadenaNum));
    }
  
    let cadenaFinal = "";
   
    // Organizar regalos
    for (let j = 0; j < numberArr.length; j++) {
        let bolsa=numberArr[j];
    
      let cajas=0;
  
      let pale=0;
  
      if (bolsa >= 10) {
        cajas = Math.trunc(bolsa / 10);
        bolsa = bolsa - cajas* 10;
      
      }
  
      if (Math.trunc(cajas / 5)>=0) {
        pale = Math.trunc(cajas / 5);
        cajas = cajas - pale * 5;
        for (let i = 0; i < pale; i++) {
          cadenaFinal = cadenaFinal + "[" + letrasArr[j] + "]";
        }
          for (let i = 0; i < cajas; i++) {
          cadenaFinal = cadenaFinal + "{" + letrasArr[j] + "}";
        }
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