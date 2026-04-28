let scelta;
let valido = false;

do {
    scelta = prompt("Seleziona una bevanda:\n1 - Acqua\n2 - Coca Cola\n3 - Birra");

    switch (scelta) {
        case "1":
            console.log("E’ stata selezionata l’acqua");
            valido = true; 
            break;
        case "2":
            console.log("E’ stata selezionata coca cola");
            valido = true; 
            break;
        case "3":
            console.log("E’ stata selezionata birra");
            valido = true;
            break;
        default:
            console.log("Scelta non valida, riprova.");
            alert("Scelta non valida, per favore inserisci un numero tra 1 e 3.");
    }
} while (!valido); 