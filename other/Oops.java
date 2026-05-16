package other;
class Pen {
    String color;
    String types;

    public void write() {
        System.out.println("writing with pen");
    }
}

public class Oops {
    public static void main(String[] args) {
        Pen p = new Pen();
        p.write();
    }
}