package oops.staticExample;

public class Staticblock {
    static int a = 4;
    static int b;

    // SECTION - static block
    // will only run once when the class is loaded
    static {
        System.out.println("I am in static block");
        b = a * 5;
    }
    // !SECTION

    public static void main(String[] args) {
        Staticblock obj = new Staticblock();
        System.out.println(Staticblock.b + " " + Staticblock.a);

        Staticblock.b += 3;

        System.out.println(Staticblock.b + " " + Staticblock.a);

        Staticblock obj2 = new Staticblock();
        System.out.println(Staticblock.b + " " + Staticblock.a);
    }
}
