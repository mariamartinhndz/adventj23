function findFirstRepeated(gifts) {
    let seenGifts = [];
  
    for (let i = 0; i < gifts.length; i++) {
      if (seenGifts.indexOf(gifts[i]) !== -1) {
        return gifts[i]; // Encontramos el primer regalo repetido
      } else {
        seenGifts.push(gifts[i]);
      }
    }
    return -1; // No se encontraron regalos repetidos
  }