package spring_basics.exercicioIoc;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Component;


@Primary
@Component
class SaborLimao implements Sabor {
    public String nome() {
        return "Limao";
    }
}

@Component
class SaborMorango implements Sabor {
    public String nome() {
        return "Morango";
    }
}

@Component
public class MaquinaSorveteIoc {
    private final Sabor sabor;

    public MaquinaSorveteIoc(Sabor sabor) {
        this.sabor = sabor;
    }

    public String servir() {
        return "Servindo sorvete de " + sabor.nome();
    }
}
