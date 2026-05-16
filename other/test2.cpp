#include<iostream>
using namespace std;

class A {
public:
    A() { foo(); }
    virtual void foo() { cout << "A"; }
};
class B : public A {
    int x = 10;
public:
    B() {}
    void foo() { cout << x; }
};
int main() { B b; }
