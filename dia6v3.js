function maxDistance(movements) {

    let asteriscos= 0;
    let mov=0;
    for(char of movements){
      if (char=='*'){ asteriscos++;}
      if (char=='>'){mov++;}
      if (char=='<'){ mov--;}
    
    }
    return (Math.abs(mov)+asteriscos);
    
    
    }
    