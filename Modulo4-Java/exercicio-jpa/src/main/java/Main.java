import org.example.Aluno;
import org.example.Matricula;
import org.example.Turma;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure()
                .addAnnotatedClass(Aluno.class)
                .addAnnotatedClass(Turma.class)
                .addAnnotatedClass(Matricula.class)
                .buildSessionFactory();

        Session session = factory.getCurrentSession();

        try {
            Aluno aluno1 = new Aluno();
            aluno1.setNome("Hugo");
            aluno1.setCurso("ADS");
            aluno1.setNivel("Intermediario");
            aluno1.setIdade(23);

            session.save(aluno1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}