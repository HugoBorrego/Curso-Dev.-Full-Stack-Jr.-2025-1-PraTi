class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def apresentar(self):
        return f"Olá, meu nome é {self.nome} e eu tenho {self.idade} anos."

pessoa1 = Pessoa("Hugo", 23)
print(pessoa1.apresentar())

class PessoaFisica(Pessoa):
    def __init__(self, nome, idade, cpf):
        super().__init__(nome, idade)
        self.cpf = cpf

        def validar_cpf(self):
            return len(self.cpf) == 11 and self.cpf.isdigit()

    def apresentar(self):
        return f"Olá, meu nome é {self.nome}, eu tenho {self.idade} anos e meu CPF é {self.cpf}."