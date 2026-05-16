#include <iostream>
using namespace std;

class Test
{
public:
    int x;

    Test(int x)
    {
        this->x = x;
    }

    // Test(const Test &a) {
    //     x = new int(*a.x);
    // }
};

int main()
{
    Test a(10);
    Test b = a;
    b.x = 20;

    cout << a.x << endl;

    return 0;
}