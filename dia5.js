function cyberReindeer(road, time) {
    let arrayRoad = [...road];
    let recorrido = '';
    let arrayRecorrido = [...recorrido];
    let trineo = '';
    let almacenamiento=[]; //para ir almacenando la carretera por cada unidad de tiempo
    for (let i = 0;  i < time; i++) {
     
      if(i==5){
          arrayRoad = arrayRoad.map((char) => (char === '|' ? '*' : char)); 
      }
      if (i === 0) {
          almacenamiento.push(arrayRoad.join(''));
          arrayRecorrido.push(arrayRoad.shift()); // uso push para agregar el trineo al arrayRecorrido
      
      } else if (arrayRoad[0] === '|' && i < 5) {
          let arrayRecorridoCopia = [...arrayRecorrido]; // Copia de arrayRecorrido
          let arrayRoadCopia = [...arrayRoad]; // Copia de arrayRoad
   
          almacenamiento.push(arrayRecorridoCopia.join('') + arrayRoadCopia.join(''));
      } else if(arrayRoad[0] === '*'){
        trineo = arrayRecorrido.pop(); // quito el trineo
        arrayRoad.shift();//quito asterisco
         arrayRecorrido.push('.'); // Coloco un asterisco en la posición anterior de 'S'
        arrayRecorrido.push(trineo); // Añado el trineo
      
        let arrayRecorridoCopia = [...arrayRecorrido]; // Copia de arrayRecorrido
        let arrayRoadCopia = [...arrayRoad]; // Copia de arrayRoad
   
        almacenamiento.push(arrayRecorridoCopia.join('') + arrayRoadCopia.join(''));
        arrayRecorrido.splice(arrayRecorrido.length-1,0,'*');
          arrayRoad.shift();//quito punto extra
       arrayRecorridoCopia = [...arrayRecorrido]; // Copia de arrayRecorrido
         arrayRoadCopia = [...arrayRoad]; // Copia de arrayRoad
   
        almacenamiento.push(arrayRecorridoCopia.join('') + arrayRoadCopia.join(''));
     i++;
    
      }else {
        trineo = arrayRecorrido.pop(); // quito el trineo
  
        arrayRecorrido.push(arrayRoad.shift()); // sumo la parte de la carretera
        arrayRecorrido.push(trineo); // añado el trineo
        trineo = ''; // dejo el hueco del trineo vacío
      let arrayRecorridoCopia = [...arrayRecorrido]; // Copia de arrayRecorrido
      let arrayRoadCopia = [...arrayRoad]; // Copia de arrayRoad
   
      almacenamiento.push(arrayRecorridoCopia.join('') + arrayRoadCopia.join(''));
      }
    }
    if(almacenamiento.length>time){
      almacenamiento.pop();
    }
    return almacenamiento;
  }