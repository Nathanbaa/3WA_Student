import chalk from "chalk";

// test nodemon
// console.log("Nodemon is running");

const colleagues = ["Nathan", "Elisa", "Jason", "Marianne"];

function displayColleagues() {
  colleagues.forEach((name, index) => {
    let color;
    switch (index % 4) {
      case 0:
        color = chalk.blue;
        break;
      case 1:
        color = chalk.green;
        break;
      case 2:
        color = chalk.yellow;
        break;
      case 3:
        color = chalk.red;
        break;
      default:
        color = chalk.white;
    }
    console.log(color(name));
  });
}

displayColleagues();
