package oops;
class Student {
    int rol;
    String name;
    float marks;

    // REVIEW - calling the constructor from the other constructor
    Student() {
        this(10, "Rahul", 10.4f);
    }

    // REVIEW - Constructor overloading
    Student(int rol, String name, float marks) {
        this.rol = rol;
        this.name = name;
        this.marks = marks;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return "Student{rol=" + rol + ", name='" + name + "', marks=" + marks + "}";
    }
}

public class Test {
    public static void main(String[] args) {
        Student s = new Student();
        Student t = new Student();

        if(s.name == t.name) {
            System.err.println("Same from ==");
        } else {
            System.err.println("Different");
        }


        System.out.println(s);
    }
}
