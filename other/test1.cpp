#include<iostream>
#include<string>
#include<algorithm>
using namespace std;

const string s = "4103";
const int n = 4;

int main() {
    int count = 0;
    for(int i=0; i<n; i++) {
        for(int j=i+1; j<n; j++) {
            if(s[i]-'0' > 3*(s[j]-'0')) count++;
        }
    }

    cout << count << endl;
}