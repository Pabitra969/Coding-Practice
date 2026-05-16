package oops.inheritance;

public class Box {
    int l;
    int w;
    int h;

    public Box() {
        //TODO - if we call the super() method it will call the default constructor of the parent class Object class
        super();

        this.l = 0;
        this.w = 0;
        this.h = 0;
    }

    public Box(int side) {
        this.l = side;
        this.w = side;
        this.h = side;
    }

    public Box(int l, int w, int h) {
        this.l = l;
        this.w = w;
        this.h = h;
    }

    Box(Box old) {
        this.l = old.l;
        this.w = old.w;
        this.h = old.h;
    }

    public void display() {
        System.out.println("Displaying the box");
    }

    public int volume() {
        return this.l * this.w * this.h;
    }
}
