package spring_basics.beans;

import org.springframework.stereotype.Service;

@Service
public class HelloService {
    public String hello() {
        return "Hello World";
    }
}

// @Service usado para Criar e Guardar