const moduloUno = (n1: number, n2: number): number => {
  return n1 + n2;
};

const moduloDos = (n: number): number => {
  return n ** 2;
};
const moduloTres = (n: number[]): number => {
    let total = 0;
    for(let i of n) total +=i;
    return total;
};
export { moduloUno, moduloDos, moduloTres };
