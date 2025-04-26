const prompt = require('prompt-sync')()
let value;
do {
    value = parseInt(prompt("Digite um valor:"));
} while (value >= 0);