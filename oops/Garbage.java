package oops;
class A {
    int n = 10;

    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object is destroyed");
    }
}

class B extends A {
    int n = 20;

    void print() {
        System.out.println(n);
    }
}

public class Garbage {
    public static void main(String[] args) {
        B b = new B();

        b.print();

    }
}
