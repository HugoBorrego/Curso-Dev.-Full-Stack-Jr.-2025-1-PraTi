package spring_basics.exercicio2IoC;

import java.math.BigDecimal;

public interface TotalStore {
    BigDecimal read();

    void write(BigDecimal newTotal);
}
