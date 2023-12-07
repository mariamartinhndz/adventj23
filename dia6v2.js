function maxDistance(movements) {

    let asteriscos= 0;
    let dcha= 0;
    let izq= 0;
    for(char of movements){
      if (char=='*'){ asteriscos++;}
      if (char=='>'){dcha++;}
      if (char=='<'){ izq++;}
    
    }
    return (Math.abs(dcha-izq)+asteriscos);
    
    
    }
    