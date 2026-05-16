package oops.static_method;

public class BoxWeight extends Box {
    int y;
    static void print() {
        System.out.println("Inside the box weight class");
    }

    public static void main(String[] args) {
        BoxWeight b = new BoxWeight();
        b.print();
    }
}
