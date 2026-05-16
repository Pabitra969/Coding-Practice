#include<iostream>
using namespace std;

int main() {
    int n=7;

    for(int i=0; i<=n/2; i++) {
        for(int j=0; j<n; j++){
            if(j<=i || n-j-1<=i) cout << "* ";
            else cout << "  ";
        }
        cout << endl;
    }

    for (int i = n/2-1; i >= 0; i--) {
        for (int j = 0; j < n; j++) {
            if (j <= i || n - j - 1 <= i)
                cout << "* ";
            else
                cout << "  ";
        }
        cout << endl;
    }
    
}