// Dichiarazione Variabili
let v = 29;
console.log("Codice con IF, ELSE");
console.log(v);

// Condizione < 18
if (v < 18 && v >= 0) {
    console.log("Insufficiente");
}

// Condizione >= 18 && < 21
else if (v >= 18 && v < 21) {
    console.log("Sufficiente");
}

// Condizione >= 21 && < 24
else if (v >= 21 && v < 24) {
    console.log("Buono");
}

// Condizione >= 24 && < 27
else if (v >= 24 && v < 27) {
    console.log("Distinto");
}

// Condizione >= 27 && <= 29
else if (v >= 27 && v <= 29) {
    console.log("Ottimo");
}

// Condizione == 30
else if (v == 30) {
    console.log("Eccellente");
}

// Condizione non possibile
else {
    console.log("Non puoi aver preso un voto negativo o superiore al 30");
}

// Condizioni con SWITCH
console.log("\nCodice con SWITCH");
console.log(v);

switch (true) {

    // Condizione < 18
    case v < 18 && v >= 0:
        console.log("Insufficiente");
        break;

    // Condizione >= 18 && < 21
    case v >= 18 && v < 21:
        console.log("Sufficiente");
        break;

    // Condizione >= 21 && < 24
    case v >= 21 && v < 24:
        console.log("Buono");
        break;

    // Condizione >= 24 && < 27
    case v >= 24 && v < 27:
        console.log("Distinto");
        break;

    // Condizione >= 27 && <= 29
    case v >= 27 && v <= 29:
        console.log("Ottimo");
        break;

    // Condizione == 30
    case v == 30:
        console.log("Eccellente");
        break;

    // Condizione non possibile
    default:
        console.log("Non puoi aver preso un voto negativo o superiore al 30");
    
}