package spring_basics.beans;

import org.springframework.stereotype.Repository;

@Repository
public class UserRepo {
    public boolean exist(String id) {
        return true;
    }
}

// @Repository usado para armazenamento de dados