let temp = Number(prompt("Inserisci la temperatura:"));

switch (true) {
    case (temp < -10):
        console.log("copriti…ancora ti raffreddi");
        break;
    case (temp < 20):
        console.log("non ci sono più le mezze stagioni");
        break;
    case (temp < 30):
        console.log("mi dia una peroni sudata");
        break;
    case (temp >= 30):
        console.log("lu mare, lu sole, lu ientu");
        break;
    default:
        console.log("Valore non valido");
}