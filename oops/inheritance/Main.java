package oops.inheritance;

public class Main {
    public static void main(String[] args) {
        Box box1 = new Box(10, 20, 30);
        Box box2 = new Box(box1);
        System.out.println(box1.w + " " + box1.l + " " + box1.h);
        System.out.println(box2.w + " " + box2.l + " " + box2.h);
        box1.display();
        System.out.println(box1.volume());
        System.out.println(box2.volume());


        Boxweight box3 = new Boxweight();
        Boxweight box4 = new Boxweight(2,3, 4, 8);
        System.out.println(box3.volume());
        System.out.println(box4.volume());
        box4.display();


        Box box5 = new Boxweight(2, 3, 4, 8);

        //TODO - this box5 will have the access of the box class variable & method the & it will not have access of the subclass/child class variable & method
        System.out.println(box5.w);
        System.err.println(box5.volume());
        box5.display();

        //FIXME - We can't assign to the subclass/childclass reference to the parent class reference
        // Boxweight box6 = new Box();

        //ANCHOR - one thing like if the superclass & the subclass has same variable then to access the superclass variable then we need to use super().variable_name
    }
}
