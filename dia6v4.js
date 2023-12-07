function maxDistance(movements) {
    let arrayMovements=[... movements];
    let ast = arrayMovements.filter((char) => char === '*').length;
     arrayMovements = arrayMovements
      .map((char) => (char === '>' ? 1 : char === '<' ? -1 : char))
      .filter((char) => char !== '*');
    
    return Math.abs(arrayMovements.reduce((a,v)=>a+v,0))+ast;
    
    }
    