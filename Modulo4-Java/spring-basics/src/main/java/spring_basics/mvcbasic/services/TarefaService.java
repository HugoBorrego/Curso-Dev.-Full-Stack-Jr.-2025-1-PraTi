package spring_basics.mvcbasic.services;


import org.springframework.stereotype.Service;
import spring_basics.mvcbasic.model.Tarefa;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@Service
public class TarefaService {
    private final Map<Long, Tarefa> banco = new LinkedHashMap<>();
    private final AtomicLong sequencia = new AtomicLong(1);

    public List<Tarefa> listarTarefas() {
        return new ArrayList<>(banco.values());
    }

    public Tarefa criar(String titulo) {
        Long id = sequencia.getAndIncrement();
        Tarefa t = new Tarefa(id, titulo, false);
        banco.put(id, t);
        return t;
    }
}
