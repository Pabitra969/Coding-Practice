package oops.staticExample;

public class Main {
    /**
     * @param args
     */
    public static void main(String[] args) {
        Human kunal = new Human(22, "Kunal", 1000, false);
        Human pabitra = new Human(26, "Pabitra", 20000, true);

        System.out.println(kunal.name);
        System.out.println(pabitra.name);
        System.out.println(Human.population);

        //FIXME - as we don't make the method print as static that's why we needed to create the object of the class
        Main m = new Main();
        m.print();

    }

    void print() {
        System.out.println("Hello");
    }
}
