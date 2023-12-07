/**Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección: */

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