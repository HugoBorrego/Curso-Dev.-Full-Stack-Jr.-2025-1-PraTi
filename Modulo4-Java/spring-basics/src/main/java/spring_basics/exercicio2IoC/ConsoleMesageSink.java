package spring_basics.exercicio2IoC;

public class ConsoleMesageSink implements MessageSink {
    @Override
    public void show(String message) {
        System.out.println(message);
    }
}
