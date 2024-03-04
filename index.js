import fs from "fs";
import http from "node:http";
import axios from "axios";

// 1. fs writeFile
const dataToWrite = "hello toto";
const filePath = "./file.txt";

fs.writeFile(filePath, dataToWrite, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Le fichier a été créé avec succcès !");

  // 2. fs readFile
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Contenu du fichier :");
    console.log(data);

    // 3. Création d'un serveur HTTP
    const localhost = "localhost";
    const port = 8000;

    const server = http.createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Hello World</h1>");
    });

    server.listen(port, localhost, () => {
      console.log(`Serveur démarré sur port : ${port}`);
    });

    // 4. Axio pour fetch data
    const url = "http://www.google.com";

    axios
      .get(url)
      .then((res) => {
        const htmlData = res.data;
        const htmlFilePath = "./google.html";

        fs.writeFile(htmlFilePath, htmlData, (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log("Fichier HTML créé avec succès");
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération de http://www.google.com :",
          error.message
        );
      });
  });
});
