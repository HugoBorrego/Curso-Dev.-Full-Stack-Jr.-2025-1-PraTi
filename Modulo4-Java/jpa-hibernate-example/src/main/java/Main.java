import com.bomgosto.model.Cardapio;
import com.bomgosto.model.Comanda;
import com.bomgosto.model.Item_comanda;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class Main {
    public static void main(String[] args) {
        SessionFactory factory = new Configuration().configure().addAnnotatedClass(Comanda.class).addAnnotatedClass(Cardapio.class).addAnnotatedClass(Item_comanda.class).buildSessionFactory();

        Session session = factory.getCurrentSession();

        try {
            Cardapio cafe1 = new Cardapio();
            cafe1.setNome("Café de Java");
            cafe1.setDescricao("Direto da ilha");
            cafe1.setPreco(1.50);

            session.save(cafe1);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
