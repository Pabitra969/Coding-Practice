package oops.SingletonClass;

public class Main {
    public static void main(String[] args) {
        Singletonclass obj = Singletonclass.getInstace();
        Singletonclass obj2 = Singletonclass.getInstace();

        if(obj == obj2) {
            System.out.println("Same");
        } else {
            System.out.println("Different");
        }
    }
}
