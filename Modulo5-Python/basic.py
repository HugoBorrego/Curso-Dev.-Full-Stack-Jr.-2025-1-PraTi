numero = 11
pi = 3.14
numero_euler = 2.718281828459045

print("Número inteiro:", numero)
print("Número float (pi):", pi)
print("Número float (euler):", numero_euler)

letra = 'A'
palavra = "Python"
frase = "Esta é uma frase de múltiplas linhas."
print("Caractere:", letra)
print("Palavra:", palavra)
print("Frase:", frase)

idade = int(input("Digite sua idade: "))
altura = float(input("Digite sua altura em metros (ex: 1.75): "))
print("Idade digitada:", idade)
print("Altura digitada:", altura)

def ola_mundo():
    print("Olá, Mundo!")

ola_mundo()

minusculo = 'Python'
maiusculo = minusculo.upper()
print("Texto em maiúsculas:", maiusculo)
print("Texto em minúsculas:", maiusculo.lower())

frase_exemplo = "Aprender Python é divertido"
palavras = frase_exemplo.split() # Dividindo a frase em palavras
print("Palavras na frase:", palavras)

frase_junta = ' '.join(palavras) # Juntando as palavras de uma frase
print("Frase juntada:", frase_junta)

texto = "  Espaços em branco ao redor  "
print("Texto original:", repr(texto))

frase = "  Surfar é incrível!  "
print("Frase sem espaços:", repr(frase.strip()))
print(frase[5:10])  # Acessando uma substring

print(f'Idade: {idade}, Altura: {altura}m')
print('Soma de 5 + 3 = {}'.format(5 + 3))
print("Subtração de 10 - 4 = %d" % (10 - 4))
print("Multiplicação de 6 * 7 = %.2f" % (6 * 7))
print("Divisão de 20 / 4 = {:.3f}".format(20 / 4))
print("Módulo 10 % 3 =", 10 % 3)
print("Exponenciação 2 ** 3 =", 2 ** 3)
print("Divisão inteira 15 // 4 =", 15 // 4)

if idade >= 18:
    print("Você é maior de idade.")
else:
    print("Você é menor de idade.")