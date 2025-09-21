package Exercicio7;

import java.util.Optional;
import java.util.List;

public interface IRepository<T extends Identificavel<ID>, ID> {
    void salvar(T entidade);
    Optional<T> buscarPorId(ID id);
    List<T> listarTodos();
    void remover(ID id) throws EntidadeNaoEncontradaException;
}
