const readline = require('readline-sync');

function mostrarMenu() {
    console.log("-- MENU --");
    console.log("1. Opção 1");
    console.log("2. Opção 2");
    console.log("3. Opção 3");

    let opcao = readline.question("Escolha uma opcao: ");

    switch (opcao) {
        case "1":
            console.log("Você escolheu a Opção 1!");
            break;
        case "2":
            console.log("Você escolheu a Opção 2!");
            break;
        case "3":
            console.log("Você escolheu a Opção 3!");
            break;
        default:
            console.log("Opção inválida!");
    }
}
mostrarMenu();