package oops.SingletonClass;

public class Singletonclass {
    private Singletonclass() {
        System.out.println("Singleton class object created");
    }

    private static Singletonclass instance;

    public static Singletonclass getInstace() {
        if(instance == null) {
            instance = new Singletonclass();
        }
        return instance;
    }
}
