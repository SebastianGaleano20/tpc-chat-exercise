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

export { moduloUno, moduloDos, moduloTres, moduloCuatro, moduloCinco };
