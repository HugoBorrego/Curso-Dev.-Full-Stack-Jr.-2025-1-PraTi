package spring_basics;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import spring_basics.exercicioIoc.MaquinaSorveteIoc;


@SpringBootApplication
public class SpringBasicsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBasicsApplication.class, args);
	}


    @Bean
    CommandLineRunner init(MaquinaSorveteIoc maquina) {
        return args -> {
            System.out.println("" + maquina.servir());
        };
    }

}
