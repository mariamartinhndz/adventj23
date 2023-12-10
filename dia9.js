
  

  function adjustLights(lights) {
    // Code here
    let contadorVerde=0;
    let contadorRojo=0;
    
    let verde=[];
    let rojo=[];
  
    for(let k=0; k<lights.length;k++){
      if(k%2===0){
        verde[k]='🟢';
        rojo[k]='🔴';
        
        
      }else{
        verde[k]='🔴';
        rojo[k]='🟢';
      }
    }
  
    for(let j=0; j<lights.length;j++){
       if(verde[j]!=lights[j]){
        contadorVerde++;
      }
        
  
      if(rojo[j]!=lights[j]){
        contadorRojo++;
      }
    }
  
  
    if(contadorVerde>contadorRojo){return contadorRojo}
    else{return contadorVerde}
   
  }