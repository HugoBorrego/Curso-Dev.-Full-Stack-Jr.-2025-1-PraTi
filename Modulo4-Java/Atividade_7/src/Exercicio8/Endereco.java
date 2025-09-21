package Exercicio8;

public class Endereco {
    private final String cep;
    private final String estado;

    public Endereco(String cep, String estado) {
        if (cep == null || !cep.matches("\\d{8}")) {
            throw new CepInvalidoException("CEP inválido: " + cep);
        }
        this.cep = cep;
        this.estado = estado;
    }

    public String getCep() {
        return cep;
    }

    public String getEstado() {
        return estado;
    }
}
