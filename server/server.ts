import net from "node:net";
import dotenv from "dotenv";
import {
  moduloUno,
  moduloDos,
  moduloTres,
  moduloCuatro,
  moduloCinco,
  moduloSeis,
  moduloSiete,
  moduloOcho,
} from "./controller/controller";

dotenv.config();

const PORT = process.env.PORT; // Las pc cuentan con 65565 puertos

const serverTCP = net.createServer();

serverTCP.on("connection", (socket) => {
  console.log("Client connected " + new Date().toLocaleString());

  socket.on("data", (data) => {
    const stringr = data.toString();
    const r = JSON.parse(stringr); // ["moduloCuatro", "1", "12"]

    if (r[0] === "moduloUno" && r.length === 3) {
      const n1 = Number(r[1]);
      const n2 = Number(r[2]);
      const suma = moduloUno(n1, n2);
      socket.write(JSON.stringify(suma));
    } else if (r[0] === "moduloDos" && Number(r[1])) {
      const n = Number(r[1]);
      const potencia = moduloDos(n);
      socket.write(JSON.stringify(potencia));
    } else if (r[0] === "moduloTres") {
      if (r[1].startsWith("[") && r[1].endsWith("]")) {
        const array = JSON.parse(r[1]);
        const suma = moduloTres(array);
        socket.write(JSON.stringify(suma));
      } else {
        socket.write(JSON.stringify("Petición incorrecta"));
      }
    } else if (r[0] === "moduloCuatro" && typeof r[1] === "string") {
      const resultado = moduloCuatro(r[1]);
      socket.write(JSON.stringify(resultado));
    } else if (r[0] === "moduloCinco" && r.length === 2) {
      const arrayOrdenado = moduloCinco(r[1]);
      socket.write(JSON.stringify(arrayOrdenado));
    } else if (
      r[0] === "moduloSeis" &&
      r[1].startsWith("[") &&
      r[1].endsWith("]")
    ) {
      const Array = JSON.parse(r[1]);
      const primerElementoDelArray = moduloSeis(Array);
      socket.write(JSON.stringify(primerElementoDelArray));
    } else if (r[0] === "moduloSiete") {
      const num = Number(r[1]);
      const resultadoFactorial = moduloSiete(num);
      socket.write(JSON.stringify(resultadoFactorial));
    } else if (r[0] === "moduloOcho") {
      //if (r[1].startsWith("{") && r[1].endsWith("}")){
      const entidad = r;
      const objeto = entidad.splice(1);
      console.log(objeto);
      //const propiedadesYValores = moduloOcho(entidad);
      //}else{
      //  socket.write(JSON.stringify("Petición incorrecta"));
    } else {
      socket.write(JSON.stringify("Petición incorrecta"));
    }
  });

  socket.on("close", () => {
    console.log("Client disconnected " + new Date().toLocaleString());
  });

  socket.on("error", () => {
    console.log("Client error");
  });
});

serverTCP.listen(PORT, () => {
  console.log("Server up on port " + PORT);
});
