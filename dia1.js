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