function drawGift(size, symbol) {
    let cadena="";
    let espacio=' ';
    let almohadilla='#';
    let lateral=0;
    for(let i=0; i<size*2-1;i++){
      if(size==1){
        return "#\n";
      }
      if(i<size-1){
        if(i==0){
          cadena=cadena+espacio.repeat(Math.abs((size*2-1)-(size+i)))+almohadilla.repeat(size+i)+'\n';
        }
        else{
           cadena=cadena+espacio.repeat(Math.abs((size*2-1)-(size+i)))+almohadilla+symbol.repeat(size-2)+almohadilla+symbol.repeat(lateral)+almohadilla+'\n';
           lateral++;
        }
      }
      else if(i==(size-1)){
            cadena=cadena+espacio.repeat(Math.abs((size*2-1)-(size+i)))+almohadilla.repeat(size)+symbol.repeat(Math.abs(lateral))+almohadilla+'\n';
            lateral--;
      }
      else if(i==(size+size-2)){
          cadena=cadena+almohadilla.repeat(size)+'\n';
          break;
  
  
      }
      else{
           cadena=cadena+almohadilla+symbol.repeat(size-2)+almohadilla+symbol.repeat(Math.abs(lateral))+almohadilla+'\n';
           lateral--;
    
      }
     
    }
    return cadena
  }