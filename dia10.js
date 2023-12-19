function createChristmasTree(ornaments, height) {
  
    let cadena = "";
  let espacios ;
  let contador=0;
    for (let i = 0; i < height; i++) {
      espacios = height - i - 1;
    
      cadena += " ".repeat(espacios);
  
      for (let j = 0; j <= i; j++) {
  
        cadena += ornaments[contador];
        contador++;
        if(contador>ornaments.length-1){
          contador=0;
        }
        if (j < i) {
          cadena += " "; // Añadir un espacio entre adornos
        }
      }
      cadena += "\n";
    }
  
    let trunkSpaces = " ".repeat(height - 1);
    let trunk = trunkSpaces + "|";
  
    cadena += trunk + "\n";
  
    return cadena;
  }
  