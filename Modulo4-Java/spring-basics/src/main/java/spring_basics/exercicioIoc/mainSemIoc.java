package spring_basics.exercicioIoc;

public class mainSemIoc {
    public static void main(String[] args) {
        Sabor sabor = new SaborChocolate();
        MaquinaSorvete maquina = new MaquinaSorvete(sabor);

        System.out.println(maquina.servir());

        Sabor sabor1 = new SaborBaunilha();
        MaquinaSorvete maquina1 = new MaquinaSorvete(sabor1);

        System.out.println(maquina1.servir());
    }
}
