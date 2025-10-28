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

if altura >= 1.75:
    print("Você é alto.")
elif altura >= 1.60:
    print("Você tem altura média.")
else:
    print("Você é baixo.")

resultado = "Aprovado" if idade >= 18 else "Reprovado"
print("Resultado baseado na idade:", resultado)

for i in range(5):
    print("Contagem:", i)

contador = 0
while contador < 5:
    print("Contador:", contador)
    contador += 1

tupla = ("maçã", "banana", 29, "cereja")
print("Tupla:", tupla)
lista = ["laranja", "uva", 42, "melancia"]
print("Lista antes da modificação:", lista)
lista.append("abacaxi")
print("Lista após adicionar um item:", lista)

discionario = {"nome": "Alice", "idade": 30, "cidade": "São Paulo"}
print("Dicionário:", discionario)

import numpy as np
matriz = np.array([1, 2, 3], [4, 5, 6])
print("Matriz NumPy:\n", matriz)

import pandas as pd
data = {'Nome': ['Ana', 'Bruno', 'Carla'], 'Idade': [28, 34, 29]}
df = pd.DataFrame(data)
print("DataFrame Pandas:\n", df)

try:
    resultado = 10 / 0
except ZeroDivisionError:
    print("Erro: Divisão por zero não é permitida.")
finally:
    print("Execução do bloco try-except finalizada.")