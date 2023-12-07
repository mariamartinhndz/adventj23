/**En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1. */
function findFirstRepeated(gifts) {
    let seenGifts = new Set();
  
    for (let i = 0; i < gifts.length; i++) {
      if (seenGifts.has(gifts[i])) {
        return gifts[i]; // Encontramos el primer regalo repetido
      } else {
        seenGifts.add(gifts[i]);
      }
    }
  
    return -1; // No se encontraron regalos repetidos
  }