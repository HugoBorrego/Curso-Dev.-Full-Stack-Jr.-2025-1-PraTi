import java.util.Locale;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int intVar = 123;
        long longVar = 123142L;
        byte byteVar = 124;
        short shortVar = 32123;

        double doubleVar = 24829346923462387642.0;
        float floatVar = 934563407537460439857.0f;

        char charVar = 'A';

        boolean booleanVar = true;


        String name = "Hugo";
        System.out.println(name);


        int a, b, c;
        double area;
        a = 3;
        b = 4;
        c = 5;

        area = (double) (a + b) * c /2;
        System.out.println(area);


        Scanner input = new Scanner(System.in);
        System.out.println("Digite um número");
        int numero = input.nextInt();
        System.out.println("Numero: "+ numero);


        // Conversão de Celcius para Fahrenheit

        System.out.println("Digite uma temperatura em °C: ");
        double celcius = input.nextDouble();
        double fahrenheit = (celcius * 1.8) + 32;
        System.out.println("Essa temperatura em °F é: " + fahrenheit);

        // Calculadora simples
        System.out.println("Digite um número: ");
        double num1 = input.nextDouble();
        System.out.println("Digite o segundo número: ");
        double num2 = input.nextDouble();
        System.out.println("Digite um operador (+, -, /, *):");
        char operador = input.next().charAt(0);
        double resultado = 0;
        switch (operador) {
            case '+':
                resultado = num1 + num2;
                break;
            case '-':
                resultado = num1 - num2;
                break;
            case '/':
                if (num2 != 0) {
                    resultado = num1 / num2;
                } else {
                    System.out.println("Erro: Divisão por zero não permitida!");
                }
                break;
            case '*':
                resultado = num1 * num2;
                break;
            default:
                System.out.println("Operador inválido!");
                break;
        }
        System.out.println("O resultado é: " + resultado);

        // Estruturas de repetição: For
        for (int i = 0; i < 10; i++) {
            System.out.println("Valor de i é: " + i);
        }

        // Estruturas de repetição: While
        int i = 0;
        while (i < 10) {
            System.out.println("Valor de i é: " + i);
            i++;
        }

        // Estruturas de repetição: Do-While
        i = 0;
        do {
            System.out.println("Valor de i é: " + i);
            i++;
        } while (i < 10);

        // Manipulação de Strings
        String texto = "Corinthians é o maior time do Brasil"; // Declara uma String.
        int comprimento = texto.length(); // Obtém o comprimento da String.
        System.out.println(comprimento); // Imprime o comprimento.
        String maiusculas = texto.toUpperCase(); // Converte a String para maiúsculas.
        System.out.println(maiusculas); // Imprime a String em maiúsculas.
        String minusculas = texto.toLowerCase(); // Converte a String para minúsculas.
        System.out.println(minusculas); // Imprime a String em minúsculas.
        boolean contem = texto.contains("time"); // Verifica se a String contém "java".
        System.out.println(contem); // Imprime se contém.
        String substituto = texto.replace("Brasil", "Mundo"); // Substitui "Java" por "Python".
        System.out.println(substituto); // Imprime a String modificada.
        String substring = texto.substring(0, 4); // Obtém uma substring dos primeiros 4 caracteres.
        System.out.println(substring); // Imprime a substring.

        // Funções matemáticas
        double num = 50.30; // Declara uma variável double.
        double arredondado = Math.round(num); // Arredonda o número para o inteiro mais próximo.
        System.out.println(arredondado); // Imprime o valor arredondado.
        double arredondadoPraCima = Math.ceil(num); // Arredonda o número para cima.
        System.out.println(arredondadoPraCima); // Imprime o valor arredondado para cima.
        double arredondadoPraBaixo = Math.floor(num); // Arredonda o número para baixo.
        System.out.println(arredondadoPraBaixo); // Imprime o valor arredondado para baixo.
        double raizQuadrada = Math.sqrt(num); // Calcula a raiz quadrada do número.
        System.out.println(raizQuadrada); // Imprime a raiz quadrada.
        double absoluto = Math.abs(num); // Obtém o valor absoluto do número.
        System.out.println(absoluto); // Imprime o valor absoluto.
        double aleatorio = Math.random(); // Gera um número aleatório entre 0.0 e 1.0.
        System.out.println(aleatorio); // Imprime o número aleatório.


        // Manipulação de arrays
        int[] vetor = new int[5];
        vetor[0] = 1;
        vetor[1] = 2;
        vetor[2] = 3;
        vetor[3] = 4;
        vetor[4] = 5;

        // Imprimindo elementos do array
        System.out.println("Elementos do array 'vetor': ");
        for (int j = 0; j < vetor.length; j++) {
            System.out.println("Elemento na posição " + j + ": " + vetor[j]);
        }

        // Soma dos elementos do array
        int soma = 0;
        for (int j = 0; j < vetor.length; j++) {
            soma += vetor[j];
        }
        System.out.println("Soma do array 'vetor': " + soma);

        // Encontrando o valor máximo no array
        int max = vetor[0];
        for (int value : vetor) {
            if (value > max) {
                max = value;
            }
        }
        System.out.println("Valor máximo no array: " + max);

        // Revertendo o array
        int start = 0;
        int end = vetor.length - 1;
        while (start < end) {
            int temp = vetor[start];
            vetor[start] = vetor[end];
            vetor[end] = temp;
            start++;
            end--;
        }
        System.out.println("Array 'vetor' invertido: ");
        for (int j = 0; j < vetor.length; j++) {
            System.out.println("Elemento na posição " + j + ": " + vetor[j]);
        }

        // Adicionando um elemento a um array
        int[] newArray = new int[vetor.length + 1];
        for (int j = 0; j < vetor.length; j++) {
            newArray[j] = vetor[j];
        }
        newArray[vetor.length] = 1;

        // Removendo um elemento de um array
        int countRemocao = 0;
        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] != 10) {
                countRemocao++;
            }
        }
        int[] newArrayRemocao = new int[countRemocao];
        int index = 0;
        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] != 10) {
                newArrayRemocao[index] = vetor[j];
                index++;
            }
        }
        System.out.println("Array após remoção: ");
        for (int j = 0; j < newArrayRemocao.length; j++) {
            System.out.println("Elemento na posição " + j + ": " + newArrayRemocao[j]);
        }

        // Pesquisando elementos em um array
        for (int j = 0; j < vetor.length; j++) {
            if (vetor[j] == 20) {
                System.out.println("Elemento 20 encontrado na posição: " + j);
            }
        }

        // Matrizes (arrays bidimensionais)
        int[][] matrix = {
                {10, 20, 35},
                {30, 50, 60},
                {70, 80, 90}
        };

        // Rotação de matriz 90 graus
        int n = matrix.length;
        int[][] rotacionada = new int[n][n];
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                rotacionada[k][n - 1 - j] = matrix[j][k];
            }
        }
        System.out.println("Matriz rotacionada 90 graus:");
        for (int j = 0; j < n; j++) {
            for (int k = 0; k < n; k++) {
                System.out.print(rotacionada[j][k] + " ");
            }
            System.out.println();
        }

        // Soma das diagonais da matriz
        int sumPrincipal = 0;
        int sumSecundaria = 0;
        for (int j = 0; j < matrix.length; j++) {
            for (int k = 0; k < matrix[j].length; k++) {
                if (j == k) {
                    sumPrincipal += matrix[j][k];
                }
                if ((j + k) == matrix.length - 1) {
                    sumSecundaria += matrix[j][k];
                }
            }
        }

        System.out.println("Soma principal: " + sumPrincipal);
        System.out.println("Soma secundária: " + sumSecundaria);

    }
}