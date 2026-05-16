package oops.staticExample;

public class Innerclass {

    static class Test {
        //FIXME - if you make the string static then it will be free from the instance of the Test class
        String name;

        public Test(String name) {
            this.name = name;
        }
    }

    public static void main(String[] args) {
        Innerclass obj = new Innerclass();
        Test a = new Test("Kunal");
        Test b = new Test("Pabitra");

        System.out.println(a.name); 
        System.out.println(b.name);
    }
}
