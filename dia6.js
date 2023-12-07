function maxDistance(movements) {
    let arrayMovements=[...movements];
    arrayMovements=arrayMovements.map((char) => (char === '>' ? 1 : char));
    arrayMovements=arrayMovements.map((char) => (char === '<' ? -1 : char));
    let arrayMovPos=arrayMovements.map((char) => (char === '*' ? 1 : char));
    let arrayMovNeg=arrayMovements.map((char) => (char === '*' ? -1 : char));
    
    let pos =Math.abs(arrayMovPos.reduce((a,v)=>a+v,0));
    let neg =Math.abs(arrayMovNeg.reduce((a,v)=>a+v,0));
    
    if(pos>neg){
      return pos;
    }
    else{
      return neg;
    }
    
    
    }