/*
'{"nombre": "gabriel", "apellido":"alberini"}' en terminal o [] para que funcione
*/

const moduloUno = (n1: number, n2: number): number => {
  return n1 + n2;
};

const moduloDos = (n: number): number => {
  return n ** 2;
};
const moduloTres = (n: number[]): number => {
    let contador = 0;
    for(let i = 0; i < n.length; i++){  //total = total + i;
      contador += i;
  }   return contador;
};

const moduloCuatro = (frase: string): number => {
  // arbol
  const vocales = "aeiouáéíóúAEIOUÁÉÍÓÚ";
  let contador = 0;

  for (let i = 0; i < frase.length; i++) {
    if (vocales.includes(frase[i])) {
      contador++;
    }
  }

  return contador;
};

const moduloCinco = (string: string): string[] => {
  const array = string.split("-");
  const arrayOrdenado = array.sort();
  return arrayOrdenado;
};

const moduloSeis = (array:any[]):string=> {
  return array[0];
}
const moduloSiete = (n:number):number => {
  if(n === 0){
   return 1;
  }
  let resultado:number = 1;
  for ( let i:number = 1; i <= n; i++){
    resultado *= i;
  } 
  return resultado;
}

const moduloOcho = (obj:object):object =>{
    return obj;
}
export { moduloUno, moduloDos, moduloTres, moduloCuatro, moduloCinco, moduloSeis, moduloSiete, moduloOcho };
