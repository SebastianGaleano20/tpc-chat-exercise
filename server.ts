import net from "node:net";
import dotenv from "dotenv";
import { moduloUno, moduloDos, moduloTres } from "./controller/controller";

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
      console.log(Number(r[1]), "Dentro del if");
      const n = Number(r[1]);
      const potencia = moduloDos(n);
      socket.write(JSON.stringify(potencia));
    }else if(r[0] === "moduloTres" && r.length > 1) {
      const nums:number[] = r.splice(1);
      const numeros:number[] = nums.map(function(num){
        return +num;
      });
      console.log(numeros);
      const suma = moduloTres(numeros);
      socket.write(JSON.stringify(suma));
    }
     else {
    //  console.log(r[1], "En el else");
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