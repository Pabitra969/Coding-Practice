package oops.inheritance;

public class Boxweight extends Box {
    double weight;

    public Boxweight() {
        this.weight = 0;
    }

    public Boxweight(int l, int w, int h, double weight) {
        super(l, w, h);
        this.weight = weight;
    }

    public Boxweight(int side, double weight) {
        super(side);
        this.weight = weight;
    }

    public Boxweight(Boxweight old) {
        super(old);
        this.weight = old.weight;
    }

}
